import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class User {
  @PrimaryGeneratedColumn()
  public id: number;
  @Column()
  public email: string;
  @Column()
  public username: string;
  @Column()
  public password: string;
}
export default User;
