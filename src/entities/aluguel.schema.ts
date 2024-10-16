import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Aluguel extends Document {
  @Prop({ required: true })
  dataInicio: Date;

  @Prop({ required: true })
  idCarro: string;

  @Prop({ required: true })
  dataFim: Date;

  @Prop({ required: true })
  valorTotal: number;

  @Prop({ required: true })
  status: string;
}

export const AluguelSchema = SchemaFactory.createForClass(Aluguel);
