import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Group from './entities/group.entity';
import { IGroupServiceProvider } from './group.Iservice';
import { GroupService } from './group.service';
import { GroupGateway } from './group.gateway';

@Module({
  imports: [TypeOrmModule.forFeature([Group])],
  providers: [
    GroupGateway,
    {
      provide: IGroupServiceProvider,
      useClass: GroupService,
    },
  ],
})
export class GroupModule {}
