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

// {
//     id: 1,
//     img: 'someImageUrl',
//     objName: 'someObjName',
//     currency: 'Dhs',
//     objPrice: 6500000,
//     ticketPrice: 60000,
//     yield: '9.25%',
//     daysLeft: 150,
//     sold: '75%'
// }
