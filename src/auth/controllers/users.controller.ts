import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from '../dtos';
import { User } from '../../models'
import { UsersService } from '../services/users.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
@UseGuards(AuthGuard('jwt'))
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  public getUsers(): Promise<User[]> {
    return this.userService.getUsers();
  }

  @Get(':id')
  public getUserbyId(@Param('id') id: string): Promise<User> {
    return this.userService.getUserById(id);
  }

  @Delete(':id')
  public deleteUser(@Param('id') id: string): Promise<void> {
    return this.userService.deleteUser(id);
  }

  @Patch(':id')
  public updateUser(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<User> {
    return this.userService.updateUser(id, updateUserDto);
  }
}
