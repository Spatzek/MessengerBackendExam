import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Inject } from '@nestjs/common';
import { IUserService, IUserServiceProvider } from './user.Iservice';
import { UserDTO } from "./entities/userDTO";

@WebSocketGateway()
export class UserGateway {
  allMessages: string[] = [];
  constructor(
    @Inject(IUserServiceProvider) private userService: IUserService,
  ) {}
  @WebSocketServer() server;
  @SubscribeMessage('getUser')
  async handleGetUserEvent(@MessageBody() message: UserDTO): Promise<void> {
    try {

      // @ts-ignore
      const user = await this.userService.getUser(
        message.username,
        message.password,
      );

      this.server.emit('getUser', user);
    } catch (e) {
      this.server.error(e.message);
    }
  }
  @SubscribeMessage('createUser')
  async handleCreateUserEvent(@MessageBody() message: UserDTO): Promise<void> {
    try {
      // @ts-ignore
      console.log('readtheselines', message.username);
      const user = await this.userService.createUser(
        message.username,
        message.password,
      );

      this.server.emit('getUser', user);
    } catch (e) {
      this.server.error(e.message);
    }
  }
}
