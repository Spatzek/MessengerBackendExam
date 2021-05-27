import User from './entities/user.entity';

export const IUserServiceProvider = 'IUserServiceProvider';
export interface IUserService {
  getUser(username: string, password: string): Promise<User>;
  createUser(username: string, password: string): Promise<User>;
}
