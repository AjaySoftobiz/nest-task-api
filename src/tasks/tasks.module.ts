import { Module } from '@nestjs/common';
import { TasksService } from './services';
import { TasksController } from './controllers';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksRepository } from './repositories';

@Module({
  imports:[TypeOrmModule.forFeature([TasksRepository])],
  providers: [TasksService],
  controllers: [TasksController]
})
export class TasksModule {}
