import { Module } from '@nestjs/common';
import { RedisModule } from '../redis/redis.module';

import { RedisPropagatorService } from './redisPropagator.service';

@Module({
  imports: [RedisModule],
  providers: [RedisPropagatorService],
  exports: [RedisPropagatorService],
})
export class RedisPropagatorModule {}
