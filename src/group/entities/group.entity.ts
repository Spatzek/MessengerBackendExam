import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Group {
  @PrimaryGeneratedColumn()
  public group_id: number;
  @Column()
  public group_name: string;
  @Column()
  public list_of_rooms: Array<number>;
}
export default Group;
