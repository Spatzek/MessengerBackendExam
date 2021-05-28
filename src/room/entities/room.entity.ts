import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
class Room {
  @PrimaryGeneratedColumn()
  public room_id: number;

  @Column()
  public user_id: number;
}

export default Room;
