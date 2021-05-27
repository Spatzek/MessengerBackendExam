import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import User from './user.entity';
import { IUserService } from './user.Iservice';

@Injectable()
export class UserService implements IUserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async getFundsByCharityName(name: string): Promise<void> {
    // await this.userRepository.findOne({ name: name });
  }

  async getUser(id: number): Promise<User> {
    return await this.userRepository.findOne(id);
  }
}
