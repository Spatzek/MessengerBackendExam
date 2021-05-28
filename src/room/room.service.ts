import { Repository } from 'typeorm';
import Room from './entities/room.entity';
// @ts-ignore
import RoomDTO from './entities/roomDTO';
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
      user_id : id,
    });
  }

  async createRoom(id: number): Promise<any> {
    console.log(id);
    const room = {
      room_id : id,
      user_id : id
    };
    const newPost = await this.roomRepository.create(room);
    await this.roomRepository.save(newPost);
    return newPost;
  }
}
