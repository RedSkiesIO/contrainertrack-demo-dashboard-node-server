import { Get, Controller, Res, HttpStatus, Param } from '@nestjs/common';
import { SensorService } from './sensor.service';

@Controller('sensor')
export class SensorController {
  constructor(private readonly readingService: SensorService) {}


  @Get(':sid')
  getCompartmentReadings(@Param('sid') cid: number, @Res() res): string {
    return res.status(HttpStatus.OK).json({ trace: 'yello' });
  }
}
