import { Module, HttpService } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { ItemController } from './item.controller';
import { itemProviders } from './item.provider';
import { ItemService } from './item.service';

@Module({
  imports: [DatabaseModule],
  controllers: [ItemController],
  providers: [
    ...itemProviders,
    ItemService,
    HttpService
  ],
})

export class ItemModule {}