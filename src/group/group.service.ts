import { Repository } from 'typeorm';
import Group from './entities/group.entity';
// @ts-ignore
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { IGroupService } from './group.Iservice';

@Injectable()
export class GroupService implements IGroupService {
  constructor(
    @InjectRepository(Group)
    private groupRepository: Repository<Group>,
  ) {}

  async getGroup(): Promise<Group[]> {
    return await this.groupRepository.find();
  }

  async createGroup(name: string): Promise<Group> {
    console.log(name);
    const group = {
      group_name: name,
    };
    const newPost = await this.groupRepository.create(group);
    await this.groupRepository.save(newPost);
    return newPost;
  }

  async addRoom(group_id: number, room_id: number): Promise<Group> {
    const group = await this.groupRepository.findOne({
      group_id: group_id,
    });
    group.list_of_rooms.push(room_id);
    return group;
  }

  async removeRoom(group_id: number, room_id: number): Promise<Group> {
    const group = await this.groupRepository.findOne({
      group_id: group_id,
    });
    const index = group.list_of_rooms.indexOf(room_id, 0);
    if (index > -1) {
      group.list_of_rooms.splice(index, 1);
    }
    return group;
  }
}
