import { Module } from '@nestjs/common';
import { ChatGateway } from './chat.gateway';
import { TypeOrmModule } from '@nestjs/typeorm';
import User from '../user/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [
    ChatGateway
  ],
})
export class ChatModule {}
