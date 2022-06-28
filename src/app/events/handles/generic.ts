import { Events } from 'types';
import { BaseEmittingEventHandle } from './base';

class GenericHandleEvents extends BaseEmittingEventHandle {
  constructor() {
    super();
  }

  send(event: string, payload: unknown) {
    this.emit(event as Events, payload);
  }
}

export { GenericHandleEvents };
