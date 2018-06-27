import { Get, Controller, Param, Res, HttpStatus } from '@nestjs/common';
import { MempoolService } from './mempool.service';

@Controller('mempool')
export class MempoolController {
  constructor(private readonly mempoolService: MempoolService) {}

  @Get(':node')
  getNodeMempool(@Param('node') node: number, @Res() res): string {
    return res.status(HttpStatus.OK).json(this.mempoolService.nodeMempool(node));
  }
}
