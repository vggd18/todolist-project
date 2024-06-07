import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { MembrosModule } from './membros/membros.module';
import { TarefasModule } from './tarefas/tarefas.module';
import { Membro } from './membros/membro.entity';
import { Tarefa } from './tarefas/tarefa.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      autoLoadEntities: true,
      synchronize: true,
      entities: [Membro, Tarefa],
      driver: require('mysql2'),
    }),
    MembrosModule,
    TarefasModule,
  ],
})
export class AppModule {}
