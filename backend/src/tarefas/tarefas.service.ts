import { Injectable, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tarefa } from './tarefa.entity';
import { Membro } from 'src/membros/membro.entity';


@Injectable()
export class TarefasService {
    constructor(
        @InjectRepository(Tarefa)
        private readonly tarefasRepository: Repository<Tarefa>,
    ) {}

    findAll(): Promise<Tarefa[]> {
        return this.tarefasRepository.find({ relations: ['membro'] });
    }

    findOne(id: number): Promise<Tarefa | undefined> {
        return this.tarefasRepository.findOne({ where: { id }, relations: ['membro'] });
    }

    async create(tarefa: Tarefa, membro: Membro): Promise<Tarefa> {
        tarefa.membro = membro;
        return this.tarefasRepository.save(tarefa);
    }

    async update(id: number, tarefa: Tarefa, membro: Membro): Promise<Tarefa> {
        if (tarefa.membro !== membro){
            throw new UnauthorizedException();
        }
        const existingTarefa = await this.findOne(id);
        if (existingTarefa?.finalizada) {
            throw new BadRequestException('Tarefas finalizadas não podem ser editadas.');
        }
        await this.tarefasRepository.update(id, tarefa);
        return this.findOne(id);
    }

    async remove(id: number): Promise<void> {
        await this.tarefasRepository.delete(id);
    }
}
