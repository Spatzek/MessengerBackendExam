import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
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
  async handleGetUserEvent(@MessageBody() message: object): Promise<void> {
    try {
      console.log(message);
      // @ts-ignore
      const user = await this.userService.getUser(message.username, message.password);
      console.log(user);
      this.server.emit('getUser', user);
    } catch (e) {
      this.server.error(e.message);
    }
  }
  @SubscribeMessage('createUser')
  async handleCreateUserEvent(@MessageBody() message: object): Promise<void> {
    try {
      console.log(message);
      // @ts-ignore
      const user = await this.userService.createUser(message.username, message.password);
      console.log(user);
      this.server.emit('getUser', user);
    } catch (e) {
      this.server.error(e.message);
    }
  }

}
