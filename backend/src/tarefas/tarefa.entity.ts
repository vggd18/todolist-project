import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Length, IsNotEmpty, IsBoolean, IsEnum } from 'class-validator';
import { Membro } from 'src/membros/membro.entity';

export enum Prioridade {
    BAIXA = 'Baixa',
    MEDIA = 'Média',
    ALTA = 'Alta'
}

@Entity()
export class Tarefa {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @Length(5, 50)
    @IsNotEmpty()
    nome: string;

    @Column()
    @Length(0, 140)
    descricao: string;

    @Column({ default: false })
    @IsBoolean()
    @IsNotEmpty()
    finalizada: boolean;

    @CreateDateColumn()
    dataTermino: Date;

    @Column({
        type: 'enum',
        enum: Prioridade,
        default: Prioridade.BAIXA,
    })
    @IsEnum(Prioridade)
    @IsNotEmpty()
    prioridade: Prioridade;

    @ManyToOne(() => Membro, membro => membro.tarefas)
    membro: Membro;
}
