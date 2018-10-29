import { Connection, Repository } from 'typeorm';
import { Compartment } from './compartment.entity';

export const compartmentProviders = [
  {
    provide: 'CompartmentRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(Compartment),
    inject: ['DbConnectionToken'],
  },
];