import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Deals {
  @ApiProperty({ example: '1', description: 'Uniq identeficator' })
  @PrimaryGeneratedColumn({ name: 'dealId' })
  id: number;

  @ApiProperty({
    example: 'Link for the image',
    description: 'Link to the image for the relevant deal',
  })
  @Column()
  img: string;

  @ApiProperty({
    example: 'Empire State Building',
    description: 'Name of the object of the relevant deal',
  })
  @Column()
  objName: string;

  @ApiProperty({
    example: 6000000,
    description: 'Total object price',
  })
  @Column()
  objPrice: number;

  @ApiProperty({
    example: 6000,
    description: 'Price for the 1 ticket',
  })
  @Column()
  ticketPrice: number;

  @ApiProperty({ example: '9.25%', description: 'Yield of the object' })
  @Column()
  yield: string;

  @ApiProperty({
    example: 25,
    description: 'How many days left to close the deal',
  })
  @Column()
  daysLeft: number;

  @ApiProperty({ example: '75%', description: 'How many already sold' })
  @Column()
  sold: string;
}
