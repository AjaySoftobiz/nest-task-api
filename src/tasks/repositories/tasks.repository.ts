import { Task } from 'src/models/task.model';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Task)
export class TasksRepository extends Repository<Task> {
  //
}
