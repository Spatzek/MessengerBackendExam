import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Room from './entities/room.entity';
import { IRoomServiceProvider } from './room.Iservice';
import { RoomGateway } from './room.gateway';
import { RoomService } from './room.service';

@Module({
  imports: [TypeOrmModule.forFeature([Room])],
  providers: [
    RoomGateway,
    {
      provide: IRoomServiceProvider,
      useClass: RoomService,
    },
  ],
})
export class RoomModule {}
