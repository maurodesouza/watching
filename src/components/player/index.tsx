import { useEffect, useState } from 'react';
import VideoPlayer from 'react-player';

import { events } from 'app';
import { Events } from 'types';

import * as S from './styles';

const Player = () => {
  const [url, setUrl] = useState('https://www.youtube.com/watch?v=u6tZhZvaP3M');
  const [playing, setPlaying] = useState(false);

  const handlePause = () => setPlaying(false);
  const handlePlay = () => setPlaying(true);

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
      {url && (
        <VideoPlayer
          url={url}
          width="100%"
          height="100%"
          playing={playing}
          onEnded={() => setUrl('')}
          onPlay={events.player.play}
          onPause={events.player.pause}
        />
      )}
    </S.Container>
  );
};

export { Player };
