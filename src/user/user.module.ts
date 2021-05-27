import { Module } from '@nestjs/common';
import { UserGateway } from './user.gateway';
import { TypeOrmModule } from '@nestjs/typeorm';
import User from './entities/user.entity';
import { IUserServiceProvider } from './user.Iservice';
import { UserService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [
    UserGateway,
    {
      provide: IUserServiceProvider,
      useClass: UserService,
    },
  ],
})
export class UserModule {}
