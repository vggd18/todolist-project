import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MembrosService } from './membros.service';
import { MembrosController } from './membros.controller';
import { Membro } from './membro.entity';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from 'src/auth/auth.guard';

@Module({
  imports: [TypeOrmModule.forFeature([Membro])],
  providers: [
    MembrosService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
  controllers: [MembrosController],
  exports: [MembrosService]
})
export class MembrosModule {}
