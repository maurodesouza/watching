import { useEffect, useRef } from 'react';

import { RangeInputRef } from 'components';
import { events } from 'app';

import { Events } from 'types';
import * as S from './styles';

const ProgressBar = () => {
  const rangeRef = useRef<RangeInputRef>(null);

  const handleChangeProgress = (event: CustomEvent<number>) => {
    rangeRef.current.setValue(event.detail);
  };

  useEffect(() => {
    events.on(Events.PLAYER_VIDEO_PROGRESS, handleChangeProgress);

    return () => {
      events.off(Events.PLAYER_VIDEO_PROGRESS, handleChangeProgress);
    };
  }, []);

  return <S.Progress ref={rangeRef} min="0" max="100" />;
};

export { ProgressBar };
