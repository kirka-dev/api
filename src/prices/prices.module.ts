import { Module } from '@nestjs/common';
import { PricesController } from './prices.controller';
import { PricesService } from './prices.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Price } from './prices.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Price])],
  controllers: [PricesController],
  providers: [PricesService],
})
export class PricesModule {}
