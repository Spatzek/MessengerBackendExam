import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';
import { Inject } from '@nestjs/common';
import { IUserService, IUserServiceProvider } from './user.Iservice';

@WebSocketGateway()
export class UserGateway {
  allMessages: string[] = [];
  constructor(
    @Inject(IUserServiceProvider) private userService: IUserService,
  ) {}
  @WebSocketServer() server;
  @SubscribeMessage('getUser')
  async handleGetUserEvent(@MessageBody() message: number): Promise<void> {
    try {
      const user = await this.userService.getUser(message);
      console.log(user);
      this.server.emit('getUser', user);
    } catch (e) {
      this.server.error(e.message);
    }
  }

}
