import { Reading } from './reading.entity';
import { Injectable, Inject, HttpService } from '@nestjs/common';
import { AxiosResponse } from '@nestjs/common/http/interfaces/axios.interfaces';
import { Repository } from 'typeorm';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { encode } from 'bs58';
import { isArray } from 'util';
import { TaskQueue } from 'cwait';

@Injectable()
export class ReadingService {

  constructor(
    @Inject('ReadingRepositoryToken')
    private readonly readingRepository: Repository<Reading>,
    private readonly httpService: HttpService,
  ) {}

  sleep(ms) {
    console.log(`sleeping for ${ms} seconds`);
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async mimicReadingTransaction(dummyTransactions: Array<object>, cid: string) {

    const uri = dummyTransactions.map((url) => {
      return `https://10.84.172.66/api/?app=nova&cmd=track&compartiment=${cid}&sensors=${url}&send=1`;
    });

    for (let i = 1; i < uri.length; i++) {
      console.log(i);
      this.httpService.get(uri[i]);
    }

    const MAX_SIMULTANEOUS_REQUESTS = 20;

    console.log(uri);

    // const queue = new TaskQueue(Promise, MAX_SIMULTANEOUS_REQUESTS);
    // const results = await Promise.all(uri.map(queue.wrap(async uri => await this.httpService.get(uri))));

    return dummyTransactions;
  }

  buildReadingTransaction(dummyReadings: Array<object>): Array<object> {
    return dummyReadings.map((reading) => {
      // console.log(dummyReadings);
      return encode(Buffer.from(JSON.stringify(reading)));
    });
  }

  async fakeReding() {
    return {
      temperature: await this.readingRepository.query('select temperature, createdAt from reading'),
      rssi: await this.readingRepository.query('select rssi, createdAt from reading'),
      pressure: await this.readingRepository.query('select pressure, createdAt from reading'),
      humidity: await this.readingRepository.query('select humidity, createdAt from reading'),
    };
  }

  async findAll() {
    return await this.readingRepository.createQueryBuilder().select().getMany();
  }
}
