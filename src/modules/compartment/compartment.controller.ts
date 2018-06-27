import { Get, Res, Controller, Param, HttpStatus } from '@nestjs/common';
import { CompartmentService } from './compartment.service';

@Controller('compartment')
export class CompartmentController {
  constructor(private readonly compartmentService: CompartmentService) {}

  @Get()
  createCompartment(@Res() res): string {
    return res.status(HttpStatus.OK).json(this.compartmentService.createCompartment());
  }

  @Get(':cid/readings')
  getCompartmentReadings(@Param('cid') cid: number, @Res() res): string {
    return res.status(HttpStatus.OK).json(this.compartmentService.getCompartmentReadings(cid));
  }
}
