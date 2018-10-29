import { Module, HttpService } from '@nestjs/common';
import { CompartmentService } from './compartment.service';
import { DatabaseModule } from '../database/database.module';
import { CompartmentController } from './compartment.controller';
import { compartmentProviders } from './compartment.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [CompartmentController],
  providers: [
    ...compartmentProviders,
    CompartmentService,
    HttpService
  ],
})

export class CompartmentModule {}
