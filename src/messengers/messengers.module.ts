import { Module } from '@nestjs/common';
import { MessengersController } from './messengers.controller';
import { MessengersService } from './messengers.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Messenger } from './messengers.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Messenger])],
  controllers: [MessengersController],
  providers: [MessengersService],
})
export class MessengersModule {}
