import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { CompartmentEntityInterface } from './interfaces/compartment.entity.interface';

@Entity()
export class Compartment implements CompartmentEntityInterface {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { nullable: false })
  address: string;

  @Column('int', { nullable: false })
  truck_id: number;
}