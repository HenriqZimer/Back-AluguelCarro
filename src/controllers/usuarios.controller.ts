import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { Usuario } from 'src/entities/usuario.schema';
import { UsuariosService } from 'src/services/usuarios.service';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post()
  async criar(@Body() usuarioDto: any): Promise<Usuario> {
    return this.usuariosService.criar(usuarioDto);
  }

  @Get()
  async listarTodos(): Promise<Usuario[]> {
    return this.usuariosService.listarTodos();
  }

  @Get(':id')
  async listarPorId(@Param('id') id: string): Promise<Usuario> {
    return this.usuariosService.listarPorId(id);
  }

  @Put(':id')
  async atualizar(
    @Param('id') id: string,
    @Body() usuarioDto: any,
  ): Promise<Usuario> {
    return this.usuariosService.atualizar(id, usuarioDto);
  }

  @Delete(':id')
  async remover(@Param('id') id: string): Promise<void> {
    await this.usuariosService.remover(id);
  }
}
