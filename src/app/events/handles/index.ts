import { PlayerHandleEvents } from './player';
import { GenericHandleEvents } from './generic';

class Handles {
  player = new PlayerHandleEvents();
  generic = new GenericHandleEvents();
}

export { Handles };
