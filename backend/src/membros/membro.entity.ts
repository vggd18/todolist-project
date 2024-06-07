import { Entity, PrimaryGeneratedColumn, Column, OneToMany, Unique } from 'typeorm';
import { IsEmail, Length, IsNotEmpty } from 'class-validator';
import { Tarefa } from 'src/tarefas/tarefa.entity';

@Entity()
@Unique(['email'])
export class Membro {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @Column()
    @Length(5)
    @IsNotEmpty()
    nome: string;

    @Column()
    @Length(3)
    @IsNotEmpty()
    senha: string;

    @OneToMany(() => Tarefa, tarefa => tarefa.membro, {
        cascade: true,
        onDelete: 'CASCADE',
    })
    tarefas: Tarefa[];
}
