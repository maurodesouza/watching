import { useEffect, useState } from 'react';
import VideoPlayer from 'react-player';

import { Pause as PauseIcon, Play as PlayIcon } from '@styled-icons/feather';

import { events } from 'app';
import { Events } from 'types';

import * as S from './styles';

const Player = () => {
  const [url, setUrl] = useState('https://www.youtube.com/watch?v=u6tZhZvaP3M');
  const [playing, setPlaying] = useState(false);

  const handlePause = () => setPlaying(false);
  const handlePlay = () => setPlaying(true);

  const handlePlayPause = () => {
    const event = playing ? 'pause' : 'play';

    events.player[event]();
  };

  useEffect(() => {
    events.on(Events.PLAYER_VIDEO_PAUSED, handlePause);
    events.on(Events.PLAYER_VIDEO_PLAYED, handlePlay);

    return () => {
      events.off(Events.PLAYER_VIDEO_PAUSED, handlePause);
      events.off(Events.PLAYER_VIDEO_PLAYED, handlePlay);
    };
  }, []);

  return (
    <S.Container>
      <S.Wrapper>
        <S.VideoWrapper>
          {url && (
            <VideoPlayer
              url={url}
              width="100%"
              height="100%"
              playing={playing}
              onEnded={() => setUrl('')}
            />
          )}
        </S.VideoWrapper>
      </S.Wrapper>

      <S.Controls>
        <S.Button onClick={handlePlayPause}>
          {playing ? <PauseIcon size={32} /> : <PlayIcon size={32} />}
        </S.Button>
      </S.Controls>
    </S.Container>
  );
};

export { Player };
