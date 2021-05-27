import User from './user.entity';

export const IUserServiceProvider = 'IUserServiceProvider';
export interface IUserService {
  getUser(message: number): Promise<User>;
}
