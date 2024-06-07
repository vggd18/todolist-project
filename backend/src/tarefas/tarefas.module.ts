import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TarefasService } from './tarefas.service';
import { TarefasController } from './tarefas.controller';
import { Tarefa } from './tarefa.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tarefa])],
  providers: [TarefasService],
  controllers: [TarefasController],
})
export class TarefasModule {}
