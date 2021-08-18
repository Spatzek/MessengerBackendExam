import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Inject } from '@nestjs/common';
import { IGroupService, IGroupServiceProvider } from './group.Iservice';

@WebSocketGateway()
export class GroupGateway {
  allMessages: string[] = [];
  constructor(
    @Inject(IGroupServiceProvider) private groupService: IGroupService,
  ) {}
  @WebSocketServer() server;

  @SubscribeMessage('getGroup')
  async handleGetGroupEvent(@MessageBody() message: object): Promise<void> {
    try {
      console.log(message);
      // @ts-ignore
      const group = await this.groupService.getGroup();
      console.log(group);
      this.server.emit('getGroup', group);
    } catch (e) {
      this.server.error(e.message);
    }
  }
  @SubscribeMessage('createGroup')
  async handleCreateGroupEvent(@MessageBody() message: object): Promise<void> {
    try {
      console.log(message);
      // @ts-ignore
      const group = await this.groupService.createGroup(message.name);
      console.log(group);
      this.server.emit('getGroup', group);
    } catch (e) {
      this.server.error(e.message);
    }
  }

  @SubscribeMessage('addRoom')
  async handleAddRoomEvent(@MessageBody() message: object): Promise<void> {
    try {
      console.log(message);
      // @ts-ignore
      const group = await this.groupService.addRoom(message.group_id, message.room_id);
      console.log(group);
      this.server.emit('getGroup', group);
    } catch (e) {
      this.server.error(e.message);
    }
  }
  @SubscribeMessage('removeRoom')
  async handleRemoveRoomEvent(@MessageBody() message: object): Promise<void> {
    try {
      console.log(message);
      // @ts-ignore
      const group = await this.groupService.removeRoom(message.group_id, message.room_id);
      console.log(group);
      this.server.emit('getGroup', group);
    } catch (e) {
      this.server.error(e.message);
    }
  }
}
