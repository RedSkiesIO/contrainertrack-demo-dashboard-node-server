import { Module } from '@nestjs/common';
import { ItemModule } from './modules/item/item.module';
import { ReadingModule } from './modules/reading/reading.module';
import { MempoolModule } from './modules/mempool/mempool.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { CompartmentModule } from './modules/compartment/compartment.module';

@Module({
  imports: [
    ItemModule,
    ReadingModule,
    MempoolModule,
    DashboardModule,
    CompartmentModule,
  ],
})

export class AppModule {}