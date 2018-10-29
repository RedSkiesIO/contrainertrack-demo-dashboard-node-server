import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { SensorEntityInterface } from './interfaces/sensor.entity.interface';

@Entity()
export class Sensor implements SensorEntityInterface {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int', { nullable: false })
  sid: number;

  @Column('int', { nullable: false })
  compartment_id: number;
}