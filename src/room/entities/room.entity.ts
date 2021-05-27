import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Room {
  @PrimaryGeneratedColumn()
  public id: number;
}

export default Room;
