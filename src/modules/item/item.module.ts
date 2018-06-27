import { Module } from '@nestjs/common';
import { ItemService } from './item.service';
import { DatabaseModule } from '../database/database.module';
import { ItemController } from './item.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [ItemController],
  providers: [ItemService],
})
export class ItemModule {}
