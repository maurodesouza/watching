import { useEffect, useState } from 'react';
import {
  Pause as PauseIcon,
  Play as PlayIcon,
  RefreshCcw as ChangeIcon,
} from '@styled-icons/feather';

import { events } from 'app';
import { Events, Modals } from 'types';

import * as S from './styles';

const PlayerControls = () => {
  const [playing, setPlaying] = useState(false);

  const handleChangePlaying = (event: CustomEvent<boolean>) =>
    setPlaying(event.detail);

  const handlePlayPause = () => {
    const event = playing ? 'pause' : 'play';

    events.player[event]();
  };

  useEffect(() => {
    events.on(Events.PLAYER_VIDEO_PLAYING, handleChangePlaying);

    return () => {
      events.off(Events.PLAYER_VIDEO_PLAYING, handleChangePlaying);
    };
  }, []);

  return (
    <S.Container>
      <div />

      <S.Button onClick={handlePlayPause}>
        {playing ? <PauseIcon size={32} /> : <PlayIcon size={32} />}
      </S.Button>

      <S.Button onClick={() => events.modal.open(Modals.CHANGE_VIDEO)}>
        <ChangeIcon size={24} />
      </S.Button>
    </S.Container>
  );
};

export { PlayerControls };
