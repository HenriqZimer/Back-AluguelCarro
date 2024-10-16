import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PagamentosService } from 'src/services/pagamentos.service';
import { Pagamento, PagamentoSchema } from 'src/entities/pagamento.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Pagamento.name, schema: PagamentoSchema },
    ]),
  ],
  providers: [PagamentosService],
  exports: [PagamentosService],
})
export class PagamentosModule {}
