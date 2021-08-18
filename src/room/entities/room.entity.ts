import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Room {
  @PrimaryGeneratedColumn()
  public room_id: number;
  @Column()
  public name: string;
  @Column("int", { array: true })
  public list_of_active_users: number[];
}
export default Room;
