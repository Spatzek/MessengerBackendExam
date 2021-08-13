import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Inject } from '@nestjs/common';
import { IRoomService, IRoomServiceProvider } from './room.Iservice';

@WebSocketGateway()
export class RoomGateway {
  allMessages: string[] = [];
  constructor(
    @Inject(IRoomServiceProvider) private roomService: IRoomService,
  ) {}
  @WebSocketServer() server;
  @SubscribeMessage('getRoom')
  async handleGetRoomEvent(@MessageBody() message: object): Promise<void> {
    try {
      console.log(message);
      // @ts-ignore
      const room = await this.roomService.getRoom(message.id);
      console.log(room);
      this.server.emit('getRoom', room);
    } catch (e) {
      this.server.error(e.message);
    }
  }
  @SubscribeMessage('createRoom')
  async handleCreateRoomEvent(@MessageBody() message: object): Promise<void> {
    try {
      console.log(message);
      // @ts-ignore
      const room = await this.roomService.createRoom(message.name);
      console.log(room);
      this.server.emit('getRoom', room);
    } catch (e) {
      this.server.error(e.message);
    }
  }
}
