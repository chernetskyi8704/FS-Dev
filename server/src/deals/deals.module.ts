import { Module } from '@nestjs/common';
import { DealsService } from './deals.service';
import { DealsController } from './deals.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Deals } from './entities/deals.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Deals])],
  providers: [DealsService],
  controllers: [DealsController],
})
export class DealsModule {}
