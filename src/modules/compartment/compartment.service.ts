import { Injectable } from '@nestjs/common';
import { json } from 'body-parser';

@Injectable()
export class CompartmentService {
  createCompartment(): object {
    return [
      'jksdhfcryjbcgkfg873y6nr8mx',
    ];
  }

  getCompartmentReadings(cid: number): object {
    return {
      sensor: {
        1: [40, 39, 10, 40, 39, 80, 40],
        2: [60, 55, 32, 10, 12, 12, 53],
        3: [58, 50, 38, 20, 10, 24, 50],
      },
    };
  }
}
