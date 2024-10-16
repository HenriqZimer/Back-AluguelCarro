import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { Pagamento } from 'src/entities/pagamento.schema';
import { PagamentosService } from 'src/services/pagamentos.service';

@Controller('pagamentos')
export class PagamentosController {
  constructor(private readonly pagamentosService: PagamentosService) {}

  @Post()
  async criar(@Body() pagamentoDto: any): Promise<Pagamento> {
    return this.pagamentosService.criar(pagamentoDto);
  }

  @Get()
  async listarTodos(): Promise<Pagamento[]> {
    return this.pagamentosService.listarTodos();
  }

  @Get(':id')
  async listarPorId(@Param('id') id: string): Promise<Pagamento> {
    return this.pagamentosService.listarPorId(id);
  }

  @Put(':id')
  async atualizar(
    @Param('id') id: string,
    @Body() pagamentoDto: any,
  ): Promise<Pagamento> {
    return this.pagamentosService.atualizar(id, pagamentoDto);
  }

  @Delete(':id')
  async remover(@Param('id') id: string): Promise<Pagamento> {
    return this.pagamentosService.remover(id);
  }
}
