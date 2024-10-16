import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitar CORS
  app.enableCors({
    origin: 'http://localhost:5173', // Permitir a origem do frontend (seu Vite está rodando em localhost:5173)
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Permite envio de cookies e autenticação, se necessário
  });

  await app.listen(3000);
}
bootstrap();
