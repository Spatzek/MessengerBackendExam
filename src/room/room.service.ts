import { Repository } from 'typeorm';
import Room from './entities/room.entity';
// @ts-ignore
import { IRoomService } from './room.Iservice';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RoomService implements IRoomService {
  constructor(
    @InjectRepository(Room)
    private roomRepository: Repository<Room>,
  ) {}

  async getRoom(id: number): Promise<Room> {
    return await this.roomRepository.findOne({
      room_id: id,
    });
  }

  async createRoom(name: string): Promise<any> {
    console.log(name);
    const room = {
      name: name,
    };
    const newPost = await this.roomRepository.create(room);
    await this.roomRepository.save(newPost);
    return newPost;
  }
}
