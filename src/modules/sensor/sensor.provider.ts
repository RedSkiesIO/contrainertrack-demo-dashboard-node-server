import { Connection, Repository } from 'typeorm';
import { Sensor } from './sensor.entity';

export const sensorProviders = [
  {
    provide: 'SensorRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(Sensor),
    inject: ['DbConnectionToken'],
  },
];