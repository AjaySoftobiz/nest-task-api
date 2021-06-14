import { Injectable, NotAcceptableException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto, UpdateUserDto } from '../dtos';
import { User } from '../../models';
import { UserRepository } from '../repositories';


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserRepository) private readonly userRepository: UserRepository,
  ) {}

  // create and save new user to DB
  public async createUser(createUserDto: CreateUserDto): Promise<User> {
    const { name, email, phone, age } = createUserDto;
    
    // chek if user already exist with same email
    const foundUser = await this.userRepository.find({email})
    if(foundUser){
      throw new NotAcceptableException('User Already exists with same email');
    }

    const user = this.userRepository.create({
      name,
      email,
      phone,
      age,
    });

    await this.userRepository.save(user);
    return user;
  }

  //get all users from db
  public async getUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  //get user using Id
  public async getUserById(id: string): Promise<User> {
    const user = await this.userRepository.findOne(id);
    if (!user) {
      throw new NotFoundException('User Not Found');
    }
    return user;
  }

  //delete user using id
  public async deleteUser(id: string): Promise<void> {
    const deleteResult = await this.userRepository.delete(id);

    if (deleteResult.affected === 0) {
      throw new NotFoundException('User Not Found');
    }
  }

  //update user data
  public async updateUser(
    id: string,
    updateUserDto: UpdateUserDto,
  ): Promise<User> {
    const { name, email, phone, age } = updateUserDto;

    const user = await this.getUserById(id);

    if (name) {
      user.name = name;
    }
    if (email) {
      user.email = email;
    }
    if (phone) {
      user.phone = phone;
    }
    if (age) {
      user.age = age;
    }

    await this.userRepository.save(user);
    return user;
  }
}
