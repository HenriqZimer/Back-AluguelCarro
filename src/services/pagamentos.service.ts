import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pagamento } from 'src/entities/pagamento.schema';

@Injectable()
export class PagamentosService {
  constructor(
    @InjectModel(Pagamento.name) private pagamentoModel: Model<Pagamento>,
  ) {}

  async criar(pagamentoDto: any): Promise<Pagamento> {
    const novoPagamento = new this.pagamentoModel(pagamentoDto);
    return novoPagamento.save();
  }

  async listarTodos(): Promise<Pagamento[]> {
    return this.pagamentoModel.find().exec();
  }

  async listarPorId(id: string): Promise<Pagamento> {
    return this.pagamentoModel.findById(id).exec();
  }

  async atualizar(id: string, pagamentoDto: any): Promise<Pagamento> {
    return this.pagamentoModel
      .findByIdAndUpdate(id, pagamentoDto, { new: true })
      .exec();
  }

  async remover(id: string): Promise<Pagamento> {
    return this.pagamentoModel.findByIdAndDelete(id).exec();
  }
}
