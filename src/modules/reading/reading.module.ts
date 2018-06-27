import { Module, HttpService } from '@nestjs/common';
import { ReadingService } from './reading.service';
import { ReadingController } from './reading.controller';
import { DatabaseModule } from '../database/database.module';
import { readingProviders } from './reading.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [ReadingController],
  providers: [
    ...readingProviders,
    ReadingService,
    HttpService,
  ],
})
export class ReadingModule {}
