import { config } from 'app';
import { getQueryParams } from 'utils';

import { Events, HTTPMethods } from 'types';

type GenerateInteractionsArgs = {
  event: Events;
  thread?: string;
  payload?: Record<string, unknown>;
};

class BaseEventHandle {
  private log(message: string, payload: unknown) {
    const isDev = config.envs.environment === 'development';

    isDev && console.info(message, payload);
  }

  protected emit(event: Events, payload?: unknown) {
    this.log(`events[emit]: ${event}`, payload);

    const customEvent = new CustomEvent(event, { detail: payload });
    document.dispatchEvent(customEvent);
  }

  protected async generateInteraction({
    event,
    thread,
    payload = {},
  }: GenerateInteractionsArgs) {
    this.log(`create interaction: ${event}`, payload);

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

export { BaseEventHandle };
