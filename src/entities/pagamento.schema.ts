import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Types } from 'mongoose';

@Schema()
export class Pagamento extends Document {
  @Prop({ type: Types.ObjectId, ref: 'Usuario', required: true })
  idCliente: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Carro', required: true })
  idCarro: Types.ObjectId;

  @Prop({ required: true })
  dataPagamento: Date;

  @Prop({ required: true })
  valor: number;

  @Prop({ required: true })
  formaPagamento: string;
}

export const PagamentoSchema = SchemaFactory.createForClass(Pagamento);
