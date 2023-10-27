import { IsString, IsNumber } from 'class-validator';

export class CreateDealDto {
  @IsString()
  readonly img: string;

  @IsString()
  readonly objName: string;

  @IsString()
  readonly currency: string;

  @IsNumber()
  readonly objPrice: number;

  @IsNumber()
  readonly ticketPrice: number;

  @IsString()
  readonly yield: string;

  @IsNumber()
  readonly daysLeft: number;

  @IsString()
  readonly sold: string;
}
