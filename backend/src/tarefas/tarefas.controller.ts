import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { TarefasService } from './tarefas.service';
import { Tarefa } from './tarefa.entity';
import { Request } from 'express';
import { Public } from 'src/auth/public.decorator';

@Controller('tarefas')
export class TarefasController {
  constructor(private readonly tarefasService: TarefasService) {}

  @Public()
  @Get()
  findAll(): Promise<Tarefa[]> {
    return this.tarefasService.findAll();
  }

  @Public()
  @Get(':id')
  findOne(@Param('id') id: number): Promise<Tarefa> {
    return this.tarefasService.findOne(id);
  }

  @Post()
  create(@Body() tarefa: Tarefa, request: Request): Promise<Tarefa> {
    const membro = request['membro'];
    return this.tarefasService.create(tarefa, membro);
  }

  @Put(':id')
    async update(@Param('id') id: number, @Body() tarefa: Tarefa, request: Request): Promise<Tarefa> {
    const membro = request['membro'];
    return this.tarefasService.update(id, tarefa, membro);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.tarefasService.remove(id);
  }
}
