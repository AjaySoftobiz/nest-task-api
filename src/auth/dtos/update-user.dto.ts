import { IsEmail, IsOptional, IsPhoneNumber, MaxLength } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()

  name?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsPhoneNumber()
  phone?: string;

}
