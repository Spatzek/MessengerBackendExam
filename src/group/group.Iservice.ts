import Group from './entities/group.entity';

export const IGroupServiceProvider = 'IGroupServiceProvider';
export interface IGroupService {
  getGroup(): Promise<Group[]>;

  createGroup(name: string): Promise<Group>;

  addRoom(group_id: number, room_id: number): Promise<Group>;

  removeRoom(group_id: number, room_id: number): Promise<Group>;
}
