import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { Aluguel } from 'src/entities/aluguel.schema';
import { AlugueisService } from 'src/services/alugueis.service';

@Controller('alugueis')
export class AlugueisController {
  constructor(private readonly alugueisService: AlugueisService) {}

  @Post()
  async criar(@Body() aluguelDto: any) {
    return this.alugueisService.criar(aluguelDto);
  }

  @Put(':id/finalizar')
  async finalizarAluguel(@Param('id') id: string) {
    return this.alugueisService.finalizarAluguel(id);
  }

  @Get()
  async listarTodos(): Promise<Aluguel[]> {
    return this.alugueisService.listarTodos();
  }

  @Get(':id')
  async listarPorId(@Param('id') id: string): Promise<Aluguel> {
    return this.alugueisService.listarPorId(id);
  }

  @Put(':id')
  async atualizar(
    @Param('id') id: string,
    @Body() aluguelDto: any,
  ): Promise<Aluguel> {
    return this.alugueisService.atualizar(id, aluguelDto);
  }

  @Delete(':id')
  async remover(@Param('id') id: string): Promise<Aluguel> {
    return this.alugueisService.remover(id);
  }
}
