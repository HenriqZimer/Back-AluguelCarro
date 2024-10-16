import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsuariosModule } from './usuarios.module';
import { CarrosModule } from './carros.module';
import { PagamentosModule } from './pagamentos.module';
import { AlugueisModule } from './alugueis.module';
import { AuthModule } from './auth.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'),
    UsuariosModule,
    CarrosModule,
    PagamentosModule,
    AlugueisModule,
    AuthModule,
  ],
})
export class AppModule {}
