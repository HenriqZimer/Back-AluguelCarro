import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from 'src/services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('registrar')
  async registrar(@Body() usuarioDto: any) {
    return this.authService.registrar(usuarioDto);
  }

  @Post('login')
  async login(@Body() loginDto: any) {
    const { email, senha } = loginDto;
    const usuario = await this.authService.validarUsuario(email, senha);

    if (!usuario) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    return this.authService.login(usuario);
  }
}
