import { Module } from '@nestjs/common';
import { SocketStateService } from './socketState.service';

@Module({
  providers: [SocketStateService],
  exports: [SocketStateService],
})
export class SocketStateModule {}
