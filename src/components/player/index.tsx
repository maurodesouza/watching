import { useEffect, useRef, useState } from 'react';
import BaseReactPlayer from 'react-player/base';

import VideoPlayer, { ReactPlayerProps } from 'react-player';
import { PlayerControls } from 'components';

import { events } from 'app';
import { Events } from 'types';

import * as S from './styles';

const Player = () => {
  const playerRef = useRef<BaseReactPlayer<ReactPlayerProps>>(null);
  const [url, setUrl] = useState('https://www.youtube.com/watch?v=u6tZhZvaP3M');

  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3);

  const handleChangePlayingState = (value: boolean) => {
    setPlaying(value);

    events.player.playing(value);
  };

  const handleSeek = (event: CustomEvent) =>
    playerRef.current.seekTo(event.detail.data.value, 'fraction');

  const handleChangeVideo = (event: CustomEvent) =>
    setUrl(event.detail.data.url);

  const handleChangeVolume = (event: CustomEvent<number>) =>
    setVolume(event.detail);

  const handlePause = () => handleChangePlayingState(false);
  const handlePlay = () => handleChangePlayingState(true);

  useEffect(() => {
    events.on(Events.PLAYER_VIDEO_SEEKED, handleSeek);
    events.on(Events.PLAYER_VIDEO_PAUSED, handlePause);
    events.on(Events.PLAYER_VIDEO_PLAYED, handlePlay);
    events.on(Events.PLAYER_VIDEO_VOLUME, handleChangeVolume);
    events.on(Events.PLAYER_VIDEO_CHANGED, handleChangeVideo);

    return () => {
      events.off(Events.PLAYER_VIDEO_SEEKED, handleSeek);
      events.off(Events.PLAYER_VIDEO_PAUSED, handlePause);
      events.off(Events.PLAYER_VIDEO_PLAYED, handlePlay);
      events.off(Events.PLAYER_VIDEO_VOLUME, handleChangeVolume);
      events.off(Events.PLAYER_VIDEO_CHANGED, handleChangeVideo);
    };
  }, []);

  return (
    <S.Container>
      <S.Wrapper>
        <S.VideoWrapper>
          {url && (
            <VideoPlayer
              ref={playerRef}
              url={url}
              width="100%"
              height="100%"
              playing={playing}
              volume={volume}
              onProgress={e => events.player.progress(e.played * 100)}
            />
          )}
        </S.VideoWrapper>
      </S.Wrapper>

      <PlayerControls />
    </S.Container>
  );
};

export { Player };
