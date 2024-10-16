import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AlugueisController } from 'src/controllers/alugueis.controller';
import { Aluguel, AluguelSchema } from 'src/entities/aluguel.schema';
import { AlugueisService } from 'src/services/alugueis.service';
import { UsuariosModule } from './usuarios.module';
import { CarrosModule } from './carros.module';
import { PagamentosModule } from './pagamentos.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Aluguel.name, schema: AluguelSchema }]),
    UsuariosModule,
    CarrosModule,
    PagamentosModule,
  ],
  controllers: [AlugueisController],
  providers: [AlugueisService],
})
export class AlugueisModule {}
