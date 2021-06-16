import { Module } from '@nestjs/common';
import { TasksService } from './services';
import { TasksController } from './controllers';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksRepository } from './repositories';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([TasksRepository]), AuthModule],
  providers: [TasksService],
  controllers: [TasksController],
})
export class TasksModule {}
