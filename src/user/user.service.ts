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

  // This method is the create user method. We get the username and password.
  async createUser(username: string, password: string): Promise<any> {

    // We create the user object by populating the username, email and password.
    // Later on, on a future iteration of the app. Email will be custom inserted as well. For now we are setting the email as the username,
    const user = {
      username,
      email: username,
      password
    };
    // We save the user in the database and get a user object back.
    const newPost = await this.userRepository.create(user);
    await this.userRepository.save(newPost);

    // We send the newly created user object back to the user gateway.
    return newPost;
  }
}
