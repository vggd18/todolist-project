import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsEmail, Length } from 'class-validator';

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
}