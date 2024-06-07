import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { IsEmail, Length } from 'class-validator';
import { Tarefa } from 'src/tarefas/tarefa.entity';

@Entity()
export class Membro {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsEmail()
    email: string;

    @Column()
    @Length(5)
    nome: string;

    @OneToMany(() => Tarefa, tarefa => tarefa.membro)
  tarefas: Tarefa[];
}