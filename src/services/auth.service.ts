import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { Usuario } from 'src/entities/usuario.schema';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Usuario.name) private usuarioModel: Model<Usuario>,
    private readonly jwtService: JwtService,
  ) {}

  async registrar(usuarioDto: any): Promise<Usuario> {
    const { nome, cpf, cnh, endereco, telefone, email, senha } = usuarioDto;

    const usuarioExistente = await this.usuarioModel.findOne({ email });
    if (usuarioExistente) {
      throw new UnauthorizedException('E-mail já registrado.');
    }

    const hashedSenha = await bcrypt.hash(senha, 10);
    const novoUsuario = new this.usuarioModel({
      nome,
      cpf,
      cnh,
      endereco,
      telefone,
      email,
      senha: hashedSenha,
    });

    return novoUsuario.save();
  }

  async validarUsuario(email: string, senha: string): Promise<Usuario> {
    const usuario = await this.usuarioModel.findOne({ email });

    console.log(usuario);

    if (usuario && (await bcrypt.compare(senha, usuario.senha))) {
      return usuario;
    }

    return null;
  }

  async login(usuario: Usuario) {
    const payload = { email: usuario.email, sub: usuario._id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
