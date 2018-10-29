import { createConnection, Connection } from 'typeorm';

export const databaseProviders = [{
  provide: 'DbConnectionToken',
  useFactory: async () => await createConnection({
    type: process.env.DB_TYPE as 'mysql' || 'mysql',
    host: process.env.DB_HOST || '10.84.172.104',
    port: Number(process.env.DB_PORT) || 3306,
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '"tl"sP"ssw0rd',
    database: process.env.DB_NAME || 'tabnova_iot_sample',
    entities: [
      __dirname + '/../**/*.entity{.ts,.js}',
    ],
    synchronize: Boolean(process.env.DB_SYNC) || true,
  }),
}];
