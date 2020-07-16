import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Doc {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  name: string

  @Column('text')
  content: string

  @CreateDateColumn()
  createdAt: any
  @UpdateDateColumn()
  updatedAt: any


}