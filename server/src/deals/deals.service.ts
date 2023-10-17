import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm/dist';
import { Deals } from './entities/deals.entity';
import { CreateDealDto } from './dto/create-deal.dto/create-deal.dto';

@Injectable()
export class DealsService {
  constructor(
    @InjectRepository(Deals)
    private readonly dealsRepository: Repository<Deals>,
  ) {}

  createNewDeal(createDealDto: CreateDealDto) {
    const newDeal = this.dealsRepository.create(createDealDto);
    return this.dealsRepository.save(newDeal);
  }

  getAllDeals() {
    return this.dealsRepository.find();
  }
}
