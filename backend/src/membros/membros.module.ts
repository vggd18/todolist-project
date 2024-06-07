import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MembrosService } from './membros.service';
import { MembrosController } from './membros.controller';
import { Membro } from './membro.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Membro])],
  providers: [MembrosService],
  controllers: [MembrosController],
})
export class MembrosModule {}
