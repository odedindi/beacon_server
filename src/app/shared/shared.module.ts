import { Global, Module } from '@nestjs/common';

import { RedisPropagatorModule } from './redisPropagator/redisPropagator.module';
import { RedisModule } from './redis/redis.module';
import { SocketStateModule } from './socketState/socketState.module';

@Global()
@Module({
  imports: [RedisModule, RedisPropagatorModule, SocketStateModule],
  exports: [RedisModule, RedisPropagatorModule, SocketStateModule],
})
export class SharedModule {}
