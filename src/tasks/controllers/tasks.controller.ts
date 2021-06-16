import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Task } from 'src/models/task.model';
import { CreateTaskDto, UpdateTaskCompletedDto } from '../dtos';
import { TasksService } from '../services';

@UseGuards(AuthGuard('jwt'))
@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Post()
  public async createTask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    return this.tasksService.createTask(createTaskDto);
  }

  @Get()
  public async getTasks(): Promise<Task[]> {
    return this.tasksService.getTasks();
  }

  @Get(':id')
  public async getTaskById(@Param('id') id: string): Promise<Task> {
    return this.tasksService.getTaskById(id);
  }

  @Delete(':id')
  public async deleteTask(@Param('id') id: string): Promise<void> {
    return this.tasksService.deleteTask(id);
  }

  @Patch(':id')
  public async updateTaskCompleted(
    @Param('id') id: string,
    @Body() updateDto: UpdateTaskCompletedDto,
  ): Promise<Task> {
    return this.tasksService.updateTaskCompleted(id, updateDto);
  }
}
