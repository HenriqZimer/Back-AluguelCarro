import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Carro extends Document {
  @Prop({ required: true })
  modelo: string;

  @Prop({ required: true })
  marca: string;

  @Prop({ required: true })
  ano: number;

  @Prop({ required: true, unique: true })
  placa: string;

  @Prop({ required: true })
  cor: string;

  @Prop({ required: true })
  status: string;

  @Prop({ required: true })
  precoPorDia: number;
}

export const CarroSchema = SchemaFactory.createForClass(Carro);
