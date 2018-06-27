import { Connection, Repository } from 'typeorm';
import { Reading } from './reading.entity';

export const readingProviders = [
  {
    provide: 'ReadingRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(Reading),
    inject: ['DbConnectionToken'],
  },
];