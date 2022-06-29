import { useEffect, useState } from 'react';
import VideoPlayer from 'react-player';

import { PlayerControls } from 'components';
import { events } from 'app';

import { Events } from 'types';
import * as S from './styles';

const Player = () => {
  const [url, setUrl] = useState('https://www.youtube.com/watch?v=u6tZhZvaP3M');
  const [playing, setPlaying] = useState(false);

  const handleChangePlayingState = (value: boolean) => {
    setPlaying(value);

    events.player.playing(value);
  };

  const handleChangeVideo = (event: CustomEvent) => {
    const { url } = event.detail.data;

    setUrl(url);
  };

  const handlePause = () => handleChangePlayingState(false);
  const handlePlay = () => handleChangePlayingState(true);

  useEffect(() => {
    events.on(Events.PLAYER_VIDEO_PAUSED, handlePause);
    events.on(Events.PLAYER_VIDEO_PLAYED, handlePlay);
    events.on(Events.PLAYER_VIDEO_CHANGED, handleChangeVideo);

    return () => {
      events.off(Events.PLAYER_VIDEO_PAUSED, handlePause);
      events.off(Events.PLAYER_VIDEO_PLAYED, handlePlay);
      events.off(Events.PLAYER_VIDEO_CHANGED, handleChangeVideo);
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

      <PlayerControls />
    </S.Container>
  );
};

export { Player };
