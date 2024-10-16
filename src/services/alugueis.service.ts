import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Aluguel } from 'src/entities/aluguel.schema';
import { Usuario } from 'src/entities/usuario.schema';
import { PagamentosService } from './pagamentos.service';
import { Carro } from 'src/entities/carro.schema';

@Injectable()
export class AlugueisService {
  constructor(
    @InjectModel(Aluguel.name) private aluguelModel: Model<Aluguel>,
    @InjectModel(Usuario.name) private usuarioModel: Model<Usuario>,
    @InjectModel(Carro.name) private carroModel: Model<Carro>, // Para manipular o carro
    private pagamentosService: PagamentosService,
  ) {}

  async criar(aluguelDto: any): Promise<Aluguel> {
    const { idCliente, idCarro, valorTotal } = aluguelDto;

    const usuario = await this.usuarioModel.findById(idCliente).exec();

    if (usuario.saldo < valorTotal) {
      throw new Error('Saldo insuficiente para realizar o aluguel.');
    }

    const carro = await this.carroModel.findById(idCarro).exec();

    if (carro.status !== 'disponivel') {
      throw new Error('O carro não está disponível para aluguel.');
    }

    usuario.saldo -= valorTotal;
    await usuario.save();

    carro.status = 'indisponivel';
    await carro.save();

    const novoAluguel = new this.aluguelModel({
      ...aluguelDto,
      status: 'em andamento',
    });
    const aluguelCriado = await novoAluguel.save();

    await this.pagamentosService.criar({
      idCliente,
      idCarro,
      valor: valorTotal,
      formaPagamento: 'saldo',
      dataPagamento: new Date(),
    });

    return aluguelCriado;
  }

  async finalizarAluguel(idAluguel: string): Promise<Aluguel> {
    const aluguel = await this.aluguelModel.findById(idAluguel).exec();

    if (!aluguel) {
      throw new Error('Aluguel não encontrado.');
    }

    aluguel.status = 'finalizado';
    await aluguel.save();

    const carro = await this.carroModel.findById(aluguel.idCarro).exec();
    carro.status = 'disponivel';
    await carro.save();

    return aluguel;
  }

  async listarTodos(): Promise<Aluguel[]> {
    return this.aluguelModel.find().exec();
  }

  async listarPorId(id: string): Promise<Aluguel> {
    return this.aluguelModel.findById(id).exec();
  }

  async atualizar(id: string, aluguelDto: any): Promise<Aluguel> {
    return this.aluguelModel
      .findByIdAndUpdate(id, aluguelDto, { new: true })
      .exec();
  }

  async remover(id: string): Promise<Aluguel> {
    return this.aluguelModel.findByIdAndDelete(id).exec();
  }
}
