import { Controller, Post, Body, Get } from '@nestjs/common';
import { DealsService } from './deals.service';
import { CreateDealDto } from './dto/create-deal.dto/create-deal.dto';

@Controller('deals')
export class DealsController {
  constructor(private readonly dealsService: DealsService) {}

  @Post('create-deal')
  createNew(
    @Body()
    createDealDto: CreateDealDto,
  ) {
    return this.dealsService.createNewDeal(createDealDto);
  }

  @Get('all-deals')
  allDeals() {
    return this.dealsService.getAllDeals();
  }
}
