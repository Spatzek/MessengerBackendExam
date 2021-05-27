import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import User from './entities/user.entity';
// @ts-ignore
import UserDTO from './entities/userDTO';
import { IUserService } from './user.Iservice';

@Injectable()
export class UserService implements IUserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async getUser(username: string, password: string): Promise<User> {
    return await this.userRepository.findOne({
      username: username,
      password: password,
    });
  }

  async createUser(username: string, password: string): Promise<any> {
    console.log(username, password );
    const user = {
      username,
      email: username,
      password
    };
    const newPost = await this.userRepository.create(user);
    await this.userRepository.save(newPost);
    return newPost;
  }
}
