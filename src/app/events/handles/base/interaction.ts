import { config } from 'app';
import { getQueryParams } from 'utils';

import { Events, HTTPMethods } from 'types';

type GenerateInteractionsArgs = {
  event: Events;
  thread?: string;
  payload?: Record<string, unknown>;
};

class BaseInteractionEventHandle {
  protected async generateInteraction({
    event,
    thread,
    payload = {},
  }: GenerateInteractionsArgs) {
    const isDev = config.envs.environment === 'development';
    isDev && console.info(`create interaction: ${event}`, payload);

    const params = getQueryParams();
    const threadId = thread ?? params.id;

    const body = {
      threadId,
      event,
      data: {
        ...payload,
      },
    };

    fetch('/api/interaction', {
      method: HTTPMethods.POST,
      body: JSON.stringify(body),
    });
  }
}

export { BaseInteractionEventHandle };
