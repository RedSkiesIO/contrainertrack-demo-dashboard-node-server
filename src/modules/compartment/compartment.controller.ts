import { Get, Res, Controller, Param, HttpStatus, Post, Body } from '@nestjs/common';
import { CompartmentService } from './compartment.service';

@Controller('compartment')
export class CompartmentController {
  constructor(private readonly compartmentService: CompartmentService) {}

  @Get()
  public async createCompartment(@Res() res) : Promise<string> {
    const createdCompartment = await this.compartmentService.createCompartment();
    return res.status(HttpStatus.CREATED).json(createdCompartment);
  }

  @Get(':cid/readings')
  getCompartmentReadings(@Param('cid') cid: number, @Res() res): string {
    return res.status(HttpStatus.OK).json(this.compartmentService.getCompartmentReadings(cid));
  }
}
