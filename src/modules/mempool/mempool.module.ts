import { Module } from '@nestjs/common';
import { MempoolService } from './mempool.service';
import { DatabaseModule } from '../database/database.module';
import { MempoolController } from './mempool.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [MempoolController],
  providers: [MempoolService],
})
export class MempoolModule {}
