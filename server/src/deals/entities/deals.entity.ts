import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Deals {
  @PrimaryGeneratedColumn({ name: 'dealId' })
  id: number;

  @Column()
  img: string;

  @Column()
  objName: string;

  @Column()
  objPrice: number;

  @Column()
  ticketPrice: number;

  @Column()
  yield: string;

  @Column()
  daysLeft: number;

  @Column()
  sold: string;
}
