import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotAcceptableException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { AuthCredentialDto, CreateUserDto } from '../dtos';
import { JwtPayload } from '../dtos/jwt-payload.interface';
import { UserRepository } from '../repositories';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService,
  ) {}

  // user signup
  public async signUp(createUserDto: CreateUserDto): Promise<void> {
    // check if there are already 10 or more than 10 users
    const users = await this.userRepository.find();
    if (users.length >= 10) {
      throw new NotAcceptableException('Cannot add more than 10 users');
    }

    const { name, email, password, phone } = createUserDto;

    // hash password
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = this.userRepository.create({
      name,
      email,
      password: hashedPassword,
      phone,
    });

    try {
      await this.userRepository.save(user);
    } catch (error) {
      // if duplicate email
      if ((error.code = 'ER_DUP_ENTRY')) {
        throw new ConflictException('Email already exist');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  // user signin
  public async signIn(
    authCredentialDto: AuthCredentialDto,
  ): Promise<{ accessToken: string }> {
    const { email, password } = authCredentialDto;

    const user = await this.userRepository.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      const payload: JwtPayload = { email };
      const accessToken = await this.jwtService.sign(payload);
      return { accessToken };
    } else {
      throw new UnauthorizedException('Wrong email or password');
    }
  }
}
