import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PagamentosController } from 'src/controllers/pagamentos.controller';
import { Pagamento, PagamentoSchema } from 'src/entities/pagamento.schema';
import { PagamentosService } from 'src/services/pagamentos.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Pagamento.name, schema: PagamentoSchema },
    ]),
  ],
  controllers: [PagamentosController],
  providers: [PagamentosService],
})
export class PagamentosModule {}
