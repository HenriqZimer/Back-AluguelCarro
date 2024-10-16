import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsuariosModule } from './usuarios.module';
import { CarrosModule } from './carros.module';
import { PagamentosModule } from './pagamentos.module';
import { AlugueisModule } from './alugueis.module';
import { AuthModule } from './auth.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://192.168.3.56/nest'),
    UsuariosModule,
    CarrosModule,
    PagamentosModule,
    AlugueisModule,
    AuthModule,
  ],
})
export class AppModule {}
