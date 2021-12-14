import { RedisSocketEventEmitDTO } from './socketEventEmitDto';

export class RedisSocketEventSendDTO extends RedisSocketEventEmitDTO {
  public readonly userId: string;
  public readonly socketId: string;
}
