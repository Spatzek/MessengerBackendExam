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
      console.log(user);
      this.server.emit('getUser', user);
    } catch (e) {
      this.server.error(e.message);
    }
  }
  @SubscribeMessage('createUser')
  async handleCreateUserEvent(@MessageBody() message: UserDTO): Promise<void> {
    try {
      // We receive the username and password from the backend and using this data we call the createUser method in the user service.
      // This user service then gives a user object back.
      const user = await this.userService.createUser(
        message.username,
        message.password,
      );
      console.log(user);
      // We send a response back to the frontend. We title the response 'getUser' and attach the user object to it.
      this.server.emit('getUser', user);
    } catch (e) {
      this.server.error(e.message);
    }
  }
}
