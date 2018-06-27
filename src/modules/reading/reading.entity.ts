import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ReadingEntityInterface } from './interfaces/reading.entity.interface';

@Entity()
export class Reading implements ReadingEntityInterface {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int', { nullable: false })
  sensor_id: number;

  @Column('int', { nullable: false })
  temperature: number;

  @Column('int', { nullable: false })
  pressure: number;

  @Column('int', { nullable: true })
  humidity: number;

  @Column('int', { nullable: false })
  battery: number;

  @Column('int', { nullable: false })
  acceleration: number;

  @Column('int', { nullable: false })
  rssi: number;

  @Column('varchar', { nullable: false })
  geo_location: string;

  @Column('timestamp', { nullable: true, default: new Date().toISOString().slice(0, 19).replace('T', ' ')})
  createdAt: number;
}