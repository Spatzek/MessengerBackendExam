import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Group {
  @PrimaryGeneratedColumn()
  public group_id: number;
  @Column()
  public group_name: string;
  @Column("int", { array: true })
  public list_of_rooms: number[];
}
export default Group;
