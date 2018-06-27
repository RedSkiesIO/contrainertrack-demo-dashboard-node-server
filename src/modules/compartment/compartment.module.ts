import { Module } from '@nestjs/common';
import { CompartmentService } from './compartment.service';
import { DatabaseModule } from '../database/database.module';
import { CompartmentController } from './compartment.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [CompartmentController],
  providers: [CompartmentService],
})

export class CompartmentModule {}
