import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './repositories/user.repository';
import { AuthController, UsersController } from './controllers';
import { AuthService, UsersService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([UserRepository])],
  controllers: [AuthController, UsersController],
  providers: [AuthService, UsersService],
})
export class AuthModule {}
