import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Users' })
export class User {
  @PrimaryGeneratedColumn('uuid',{name:'Id'})
  public id: number;

  @Column({name:'Name'})
  public name: string;

  @Column({name:'Email'})
  public email: string;

  @Column({name:'Phone'})
  public phone: string;

  @Column({name:'Age'})
  public age: number;
}
