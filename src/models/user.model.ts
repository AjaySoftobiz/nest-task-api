import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Users' })
export class User {
  @PrimaryGeneratedColumn('uuid', { name: 'Id' })
  public id: number;

  @Column({ name: 'Name' })
  public name: string;

  @Column({ name: 'Email', unique: true })
  public email: string;

  @Column({ name: 'Password' })
  password: string;

  @Column({ name: 'Phone' })
  public phone: string;
}
