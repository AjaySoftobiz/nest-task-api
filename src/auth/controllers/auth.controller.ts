import { Body, Controller, Post } from "@nestjs/common";
import { AuthCredentialDto, CreateUserDto } from "../dtos";
import { AuthService } from "../services";

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signup')
  public signUp(@Body() createUserDto: CreateUserDto): Promise<void> {
    return this.authService.signUp(createUserDto);
  }

  @Post('/signin')
  public signIn(@Body() authCredentialDto: AuthCredentialDto): Promise<{accessToken:string}> {
    return this.authService.signIn(authCredentialDto);
  }
}