import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Usuario extends Document {
  @Prop({ required: true })
  nome: string;

  @Prop({ required: true, unique: true })
  cpf: string;

  @Prop({ required: true, unique: true })
  cnh: string;

  @Prop({ required: true })
  endereco: string;

  @Prop({ required: true })
  telefone: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  senha: string;

  @Prop({ default: 0, required: true })
  saldo: number;
}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario);
