import { Reading } from './reading.entity';
import { Injectable, Inject, HttpService } from '@nestjs/common';
import { AxiosResponse } from '@nestjs/common/http/interfaces/axios.interfaces';
import { Repository } from 'typeorm';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { encode } from 'bs58';

@Injectable()
export class ReadingService {

  constructor(
    @Inject('ReadingRepositoryToken')
    private readonly readingRepository: Repository<Reading>,
    private readonly httpService: HttpService,
  ) {}

  mimicSensor(dummyReadings) {
    const preparedData = dummyReadings.map((reading) => {
      return encode(Buffer.from(JSON.stringify(reading)));
    });

    for (let reading in preparedData) {
      const response = this.httpService.get(
        `https://10.84.172.95/api/?app=nova&cmd=track&compartiment=${preparedData[reading]}&sensors=kjuhgsfjsgdhfhsdlkghf&send=1`,
      ).pipe(
        map(response => response.data),
      );
      console.log(response);
    }

    return true;
  }

  async findAll() {
    return await this.readingRepository.createQueryBuilder().select().limit(999).getMany();
    // return await this.sensorRepository.query('SELECT * FROM reading;');
  }
}
