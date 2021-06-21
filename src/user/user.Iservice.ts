import User from './entities/user.entity';

export const IUserServiceProvider = 'IUserServiceProvider';
export interface IUserService {

  getUser(username: string, password: string): Promise<User>;

  // This is the interface for the user service.
  // This interface contains all the methods implemented in the user service.
  createUser(username: string, password: string): Promise<User>;
}
