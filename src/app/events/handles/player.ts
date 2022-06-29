import { Events } from 'types';
import { BaseEventHandle } from './base';

class PlayerHandleEvents extends BaseEventHandle {
  constructor() {
    super();

    this.pause = this.pause.bind(this);
    this.play = this.play.bind(this);
  }

  playing = (value: boolean) => {
    this.emit(Events.PLAYER_VIDEO_PLAYING, value);
  };

  pause() {
    this.generateInteraction({ event: Events.PLAYER_VIDEO_PAUSED });
  }

  play() {
    this.generateInteraction({ event: Events.PLAYER_VIDEO_PLAYED });
  }
}

export { PlayerHandleEvents };
