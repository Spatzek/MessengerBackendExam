import Room from './entities/room.entity';

export const IRoomServiceProvider = 'IRoomServiceProvider';
export interface IRoomService {
  getRoom(id: number): Promise<Room>;
  createRoom(id: number): Promise<Room>;
}
