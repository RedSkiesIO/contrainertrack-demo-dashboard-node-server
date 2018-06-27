import { SubscribeMessage, WebSocketGateway, WebSocketServer, WsResponse } from '@nestjs/websockets';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

@WebSocketGateway(1212)
export class DashboardGateway {
  @WebSocketServer() server;

  onEvent(client, data: any): WsResponse<any> {
    console.log(client, data);
    const event = 'events';
    return { event, data };
  }

}