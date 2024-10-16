import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CarrosController } from 'src/controllers/carros.controller';
import { Carro, CarroSchema } from 'src/entities/carro.schema';
import { CarrosService } from 'src/services/carros.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Carro.name, schema: CarroSchema }]),
  ],
  controllers: [CarrosController],
  providers: [CarrosService],
})
export class CarrosModule {}
