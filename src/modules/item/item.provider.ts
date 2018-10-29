import { Connection, Repository } from 'typeorm';
import { Item } from './item.entity';

export const itemProviders = [
  {
    provide: 'ItemRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(Item),
    inject: ['DbConnectionToken'],
  },
];