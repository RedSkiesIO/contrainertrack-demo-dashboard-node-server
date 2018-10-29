import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { WsAdapter } from '@nestjs/websockets/adapters';
import * as cors from 'cors';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

async function bootstrap() {
  console.log('trace')
  const app = await NestFactory.create(AppModule);
  app.use(cors());
  app.useWebSocketAdapter(new WsAdapter(app.getHttpServer()));
  await app.listen(3000);
}
bootstrap();