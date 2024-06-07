import { Module } from '@nestjs/common';
import { TarefasService } from './tarefas.service';
import { TarefasController } from './tarefas.controller';

@Module({
  providers: [TarefasService],
  controllers: [TarefasController]
})
export class TarefasModule {}
