import { Controller, Post, Body, Get } from '@nestjs/common';
import { DealsService } from './deals.service';
import { CreateDealDto } from './dto/create-deal.dto/create-deal.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Deals } from './entities/deals.entity';

@Controller('deals')
export class DealsController {
  constructor(private readonly dealsService: DealsService) {}

  @ApiOperation({ summary: 'Create new deal' })
  @ApiResponse({ status: 200, type: CreateDealDto })
  @Post('create-deal')
  createNew(
    @Body()
    createDealDto: CreateDealDto,
  ) {
    return this.dealsService.createNewDeal(createDealDto);
  }

  @ApiOperation({ summary: 'Return all deals' })
  @ApiResponse({ status: 200, type: [Deals] })
  @Get('all-deals')
  allDeals() {
    return this.dealsService.getAllDeals();
  }
}
