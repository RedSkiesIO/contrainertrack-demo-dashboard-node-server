import { Injectable, Inject, HttpService } from '@nestjs/common';
import { json } from 'body-parser';
import { Repository } from 'typeorm';
import { Compartment } from './compartment.entity';

@Injectable()
export class CompartmentService {

  constructor(
    @Inject('CompartmentRepositoryToken')
    private readonly compartmentRepository: Repository<Compartment>,
    private readonly httpService: HttpService,
  ) {}

  async createCompartment() : Promise<Compartment> {
    let compartment = new Compartment();
    compartment.address = this.randomBase58(24);
    compartment.truck_id = 1;
    return (await this.compartmentRepository).save(compartment);
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

  randomBase58(digits = 0) {
    const base58 = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'.split('')
  
    let result = ''
    let char
  
    while (result.length < digits) {
      char = base58[Math.random() * 57 >> 0]
  
      if (result.indexOf(char) === -1) result += char
      if (result.indexOf('Qm') > -1) result = ''
    }
  
    return result
  }
}
