import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Tasks' })
export class Task {
  @PrimaryGeneratedColumn('uuid', { name: 'Id' })
  public id: string;

  @Column({ name: 'Title' })
  public title: string;

  @Column({ name: 'Description' })
  public description: string;

  @Column({ name: 'Completed',default:false })
  public completed: boolean;
}
