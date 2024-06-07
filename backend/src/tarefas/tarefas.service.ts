import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tarefa } from './tarefa.entity';

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

    create(tarefa: Tarefa): Promise<Tarefa> {
        return this.tarefasRepository.save(tarefa);
    }

    async update(id: number, tarefa: Tarefa): Promise<Tarefa> {
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
