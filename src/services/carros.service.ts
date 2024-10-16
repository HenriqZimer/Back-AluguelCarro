import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Carro } from 'src/entities/carro.schema';

@Injectable()
export class CarrosService {
  constructor(@InjectModel(Carro.name) private carroModel: Model<Carro>) {}

  async criar(carroDto: any): Promise<Carro> {
    const novoCarro = new this.carroModel(carroDto);
    return novoCarro.save();
  }

  async listarTodos(): Promise<Carro[]> {
    return this.carroModel.find().exec();
  }

  async listarPorId(id: string): Promise<Carro> {
    return this.carroModel.findById(id).exec();
  }

  async atualizar(id: string, carroDto: any): Promise<Carro> {
    return this.carroModel
      .findByIdAndUpdate(id, carroDto, { new: true })
      .exec();
  }

  async remover(id: string): Promise<Carro> {
    return this.carroModel.findByIdAndDelete(id).exec();
  }
}
