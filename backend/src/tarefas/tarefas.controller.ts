import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { TarefasService } from './tarefas.service';
import { Tarefa } from './tarefa.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('tarefas')
export class TarefasController {
  constructor(private readonly tarefasService: TarefasService) {}

  @Get()
  findAll(): Promise<Tarefa[]> {
    return this.tarefasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Tarefa> {
    return this.tarefasService.findOne(id);
  }
  @Post()
  create(@Body() tarefa: Tarefa): Promise<Tarefa> {
    return this.tarefasService.create(tarefa);
  }
  @Put(':id')
  update(@Param('id') id: number, @Body() tarefa: Tarefa): Promise<Tarefa> {
    return this.tarefasService.update(id, tarefa);
  }
  
  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.tarefasService.remove(id);
  }
}
