import { Events } from 'types';
import { BaseEventHandle } from './base';

class PlayerHandleEvents extends BaseEventHandle {
  constructor() {
    super();

    this.pause = this.pause.bind(this);
    this.play = this.play.bind(this);
  }

  pause() {
    this.generateInteraction({ event: Events.PLAYER_VIDEO_PAUSED });
  }

  play() {
    this.generateInteraction({ event: Events.PLAYER_VIDEO_PLAYED });
  }
}

export { PlayerHandleEvents };
