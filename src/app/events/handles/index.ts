import { PlayerHandleEvents } from './player';
import { GenericHandleEvents } from './generic';
import { ModalHandleEvents } from './modal';

class Handles {
  player = new PlayerHandleEvents();
  generic = new GenericHandleEvents();
  modal = new ModalHandleEvents();
}

export { Handles };
