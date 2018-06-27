import { Post, Controller, Body, Res, HttpStatus } from '@nestjs/common';
import { ItemService } from './item.service';
import { MoveItemDTO } from './dto/move-item.dto';

@Controller('item')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Post('move')
  async move(@Body() moveItemDTO: MoveItemDTO, @Res() res): Promise<object> {
    return res.status(HttpStatus.OK).json(this.itemService.move(moveItemDTO));
  }
}
