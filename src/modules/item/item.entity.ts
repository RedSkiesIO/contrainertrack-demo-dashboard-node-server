import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ItemEntityInterface } from './interfaces/item.entity.interface';

@Entity()
export class Item implements ItemEntityInterface {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { nullable: false })
  name: string;

  @Column('int', { nullable: false })
  compartment_id: number;
}