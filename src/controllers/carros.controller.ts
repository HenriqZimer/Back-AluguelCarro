import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { Carro } from 'src/entities/carro.schema';
import { CarrosService } from 'src/services/carros.service';

@Controller('carros')
export class CarrosController {
  constructor(private readonly carrosService: CarrosService) {}

  @Post()
  async criar(@Body() carroDto: any): Promise<Carro> {
    return this.carrosService.criar(carroDto);
  }

  @Get()
  async listarTodos(): Promise<Carro[]> {
    return this.carrosService.listarTodos();
  }

  @Get(':id')
  async listarPorId(@Param('id') id: string): Promise<Carro> {
    return this.carrosService.listarPorId(id);
  }

  @Put(':id')
  async atualizar(
    @Param('id') id: string,
    @Body() carroDto: any,
  ): Promise<Carro> {
    return this.carrosService.atualizar(id, carroDto);
  }

  @Delete(':id')
  async remover(@Param('id') id: string): Promise<Carro> {
    return this.carrosService.remover(id);
  }
}
