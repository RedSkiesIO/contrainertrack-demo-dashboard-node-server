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
export class SensorService {

  constructor(
    @Inject('SensorRepositoryToken')
    private readonly sensorRepository: Repository<Reading>,
    private readonly httpService: HttpService,
  ) {}
}
