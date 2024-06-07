import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { MembrosService } from './membros.service';
import { Membro } from './membro.entity';

@Controller('membros')
export class MembrosController {
    constructor(private readonly membrosService: MembrosService) {}

    @Get('')
    findAll(): Promise <Membro[]> {
        return this.membrosService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<Membro> {
      return this.membrosService.findOne(id);
    }

    @Post()
    create(@Body() membro:Membro): Promise<Membro>{
        return this.membrosService.create(membro);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() membro: Membro): Promise<Membro> {
        return this.membrosService.update(id, membro);
    }

    @Delete(':id')
    remove(@Param('id') id: number): Promise<void> {
        return this.membrosService.remove(id);
    }
}
