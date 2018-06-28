import { Get, Controller, Res, HttpStatus, Param } from '@nestjs/common';
import { ReadingService } from './reading.service';
import { Reading } from './reading.entity';

@Controller('reading')
export class ReadingController {
  constructor(private readonly readingService: ReadingService) {}

  @Get('mimic/:cid')
  async mimic(@Param('cid') cid: string) {
    const dummyReadings = await this.readingService.findAll();
    const dummyTransactions = this.readingService.buildReadingTransaction(dummyReadings);
    return this.readingService.mimicReadingTransaction(dummyTransactions, cid);
    // res.status(HttpStatus.OK).json(this.sensorService.mimicSensor());
    // console.log(string);
    // return string;
  }
}
