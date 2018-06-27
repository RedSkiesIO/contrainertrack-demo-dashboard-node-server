import { Get, Controller, Res, HttpStatus } from '@nestjs/common';
import { ReadingService } from './reading.service';
import { Reading } from './reading.entity';

@Controller('reading')
export class ReadingController {
  constructor(private readonly readingService: ReadingService) {}

  @Get('mimic')
  async mimic() {
    const dummyReadings = await this.readingService.findAll();
    return this.readingService.mimicSensor(dummyReadings);
    // res.status(HttpStatus.OK).json(this.sensorService.mimicSensor());
    // console.log(string);
    // return string;
  }
}
