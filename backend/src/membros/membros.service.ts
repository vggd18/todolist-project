import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Membro } from './membro.entity';

export type membro = Membro;

@Injectable()
export class MembrosService {
    constructor (
        @InjectRepository(Membro)
        private readonly membrosRepository: Repository<Membro>,
    ) {}

    private readonly membros = [
        {
            id: 100,
            email: 'v1@mail.com',
            nome: 'V1',
            senha: '1234'
        }
    ]

    async findByEmail(email: string): Promise<Membro | undefined> {
        return await this.membrosRepository.findOne({ where: { email } });
    }

    findAll(): Promise<Membro[]> {
        return this.membrosRepository.find();
    }

    findOne(id: number): Promise<Membro | undefined>  {
        return this.membrosRepository.findOne({ where: { id } });
    }
    
    create(membro: Membro): Promise<Membro> {
        return this.membrosRepository.save(membro);
    }

    async update(id: number, membro: Membro): Promise<Membro> {
        await this.membrosRepository.update(id, membro);
        return this.findOne(id);
    }

    async remove(id: number): Promise<void> {
        await this.membrosRepository.delete(id);
    }

}
