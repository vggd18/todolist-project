import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { Length } from 'class-validator';
import { Membro } from 'src/membros/membro.entity';

@Entity()
export class Tarefa {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    @Length(5, 50)
    nome: string;

    @Column({ length: 140 })
    descricao: string;

    @Column({ nullable: false })
    finalizada: boolean;

    @Column()
    @CreateDateColumn()
    dataTermino: Date;

    @Column({
        type: 'enum',
        enum: ['Baixa', 'Média', 'Alta'],
        default: 'Baixa',
    })
    prioridade: string;

    @ManyToOne(() => Membro, membro => membro.tarefas)
    membro: Membro;
}
