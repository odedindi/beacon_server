import type { ClientOpts as RedisClientOpts } from 'redis';
import * as redisStore from 'cache-manager-redis-store';
import {
  CacheModule,
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { ChatModule } from '../chat/chat.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { SharedModule } from './shared/shared.module';
import { EventsGateway } from './test.gateway';

@Module({
  imports: [
    // CacheModule.register<RedisClientOpts>({
    //   store: redisStore,
    //   // Store-specific configuration:
    //   host: process.env.LOCAL_IP || 'localhost',
    //   port: Number(process.env.REDIS_PORT) || 6379,
    // }),

    // SharedModule,
    ChatModule,
    
  ],
  controllers: [AppController],
  providers: [
    AppService /* PrismaService, UserService, MessageService */,
    // EventsGateway,
    
  ],
})
export class AppModule {}

