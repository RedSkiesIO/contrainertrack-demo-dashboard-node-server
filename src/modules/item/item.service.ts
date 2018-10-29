import { Injectable, Inject, HttpService } from '@nestjs/common';
import { json } from 'body-parser';
import { Repository } from 'typeorm';
import { Item } from './item.entity';
import { MoveItemDTO } from './dto/move-item.dto';

@Injectable()
export class ItemService {

  constructor(
    @Inject('ItemRepositoryToken')
    private readonly itemRepository: Repository<Item>,
    private readonly httpService: HttpService,
  ) {}

  moveItem(dto: MoveItemDTO) {
    console.log(dto);
    const item = new Item();
    item.name = dto.name;
    item.compartment_id = dto.compartment_id;
    this.itemRepository.save(item);
    console.log(123321);
    console.log(dto);
  }
}
