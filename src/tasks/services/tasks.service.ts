import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from 'src/models/task.model';
import { CreateTaskDto, UpdateTaskCompletedDto } from '../dtos';
import { TasksRepository } from '../repositories';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TasksRepository)
    private readonly taskRepository: TasksRepository,
  ) {}

  // create new Task
  public async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    const task = this.taskRepository.create({
      title:createTaskDto.title,
      description:createTaskDto.description,
    });

    await this.taskRepository.save(task);
    return task;
  }

  // get All Tasks
  public async getTasks(): Promise<Task[]> {
    const tasks = await this.taskRepository.find();
    if (tasks.length === 0) {
      throw new NotFoundException('No task found');
    }
    return tasks;
  }

  //   get task by id
  public async getTaskById(id: string): Promise<Task> {
    const task = await this.taskRepository.findOne(id);

    if (!task) {
      throw new NotFoundException('Taks not found');
    }
    return task;
  }

  // delete task by id
  public async deleteTask(id: string): Promise<void> {
    const deleteResult = await this.taskRepository.delete(id);

    if (deleteResult.affected === 0) {
      throw new NotFoundException('Task not found');
    }
  }

  // update whether task is completed or not 
  public async updateTaskCompleted(
    id: string,
    updateDto: UpdateTaskCompletedDto,
  ): Promise<Task> {
    const task = await this.getTaskById(id);

    task.completed = updateDto.completed;
    await this.taskRepository.save(task);

    return task;
  }
}
