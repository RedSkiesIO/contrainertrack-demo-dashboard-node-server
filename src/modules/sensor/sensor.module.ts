import { Module, HttpService } from '@nestjs/common';
import { SensorService } from './sensor.service';
import { SensorController } from './sensor.controller';
import { DatabaseModule } from '../database/database.module';
import { sensorProviders } from './sensor.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [SensorController],
  providers: [
    ...sensorProviders,
    SensorService,
    HttpService,
  ],
})
export class SensorModule {}
