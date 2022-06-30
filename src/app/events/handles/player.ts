import { Events } from 'types';
import { BaseEventHandle } from './base';

class PlayerHandleEvents extends BaseEventHandle {
  constructor() {
    super();

    this.pause = this.pause.bind(this);
    this.play = this.play.bind(this);
  }

  seek = (value: number) => {
    this.generateInteraction({
      event: Events.PLAYER_VIDEO_SEEKED,
      payload: { value },
    });
  };

  progress = (value: number) => {
    this.emit(Events.PLAYER_VIDEO_PROGRESS, value);
  };

  playing = (value: boolean) => {
    this.emit(Events.PLAYER_VIDEO_PLAYING, value);
  };

  volume = (value: number) => {
    this.emit(Events.PLAYER_VIDEO_VOLUME, value);
  };

  video(url: string) {
    this.generateInteraction({
      event: Events.PLAYER_VIDEO_CHANGED,
      payload: { url },
    });
  }

  pause() {
    this.generateInteraction({ event: Events.PLAYER_VIDEO_PAUSED });
  }

  play() {
    this.generateInteraction({ event: Events.PLAYER_VIDEO_PLAYED });
  }
}

export { PlayerHandleEvents };
