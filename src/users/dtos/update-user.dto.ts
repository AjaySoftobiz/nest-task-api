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

  @IsOptional()
  @MaxLength(3)
  age?: number;
}
