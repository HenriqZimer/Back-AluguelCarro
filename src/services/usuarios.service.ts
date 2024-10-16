import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Usuario } from 'src/entities/usuario.schema';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectModel(Usuario.name) private usuarioModel: Model<Usuario>,
  ) {}

  async criar(usuarioDto: any): Promise<Usuario> {
    const novoUsuario = new this.usuarioModel(usuarioDto);
    return novoUsuario.save();
  }

  async listarTodos(): Promise<Usuario[]> {
    return this.usuarioModel.find().exec();
  }

  async listarPorId(id: string): Promise<Usuario> {
    return this.usuarioModel.findById(id).exec();
  }

  async atualizar(id: string, usuarioDto: any): Promise<Usuario> {
    return this.usuarioModel
      .findByIdAndUpdate(id, usuarioDto, { new: true })
      .exec();
  }

  async remover(id: string): Promise<void> {
    await this.usuarioModel.findByIdAndDelete(id).exec();
  }
}
