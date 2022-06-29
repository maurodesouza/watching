import { Events } from 'types';
import { BaseEventHandle } from './base';

class GenericHandleEvents extends BaseEventHandle {
  constructor() {
    super();
  }

  send(event: string, payload: unknown) {
    this.emit(event as Events, payload);
  }
}

export { GenericHandleEvents };
