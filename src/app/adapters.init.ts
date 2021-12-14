import { INestApplication } from '@nestjs/common';

import { RedisPropagatorService } from './shared/redisPropagator/redisPropagator.service';
import { SocketStateAdapter } from './shared/socketState/socketState.adapter';
import { SocketStateService } from './shared/socketState/socketState.service';

export const initAdapters = (app: INestApplication): INestApplication => {
  const socketStateService = app.get(SocketStateService);
  const redisPropagatorService = app.get(RedisPropagatorService);

  app.useWebSocketAdapter(
    new SocketStateAdapter(app, socketStateService, redisPropagatorService),
  );

  return app;
};
