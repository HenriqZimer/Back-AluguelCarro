import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsuariosController } from 'src/controllers/usuarios.controller';
import { Usuario, UsuarioSchema } from 'src/entities/usuario.schema';
import { UsuariosService } from 'src/services/usuarios.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Usuario.name, schema: UsuarioSchema }]),
  ],
  controllers: [UsuariosController],
  providers: [UsuariosService],
  exports: [
    MongooseModule.forFeature([{ name: Usuario.name, schema: UsuarioSchema }]),
  ],
})
export class UsuariosModule {}
