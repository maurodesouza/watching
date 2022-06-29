import { FormEvent, useState } from 'react';
import {
  VolumeX as MutedIcon,
  Volume as LowVolumeIcon,
  Volume1 as VolumeIcon,
  Volume2 as HighVolumeIcon,
} from '@styled-icons/feather';

import { RangeInput } from 'components';
import { events } from 'app';

import * as S from './styles';

const levels = {
  muted: MutedIcon,
  1: LowVolumeIcon,
  2: VolumeIcon,
  3: HighVolumeIcon,
};

const VolumeRange = () => {
  const [volumeLevel, setVolumeLevel] = useState<keyof typeof levels>(1);

  const handleChangeVolume = (event: FormEvent<HTMLInputElement>) => {
    const value = +(event.target as HTMLInputElement).value;

    events.player.volume(value / 100);

    if (!value) return setVolumeLevel('muted');
    if (value < 20) return setVolumeLevel(1);
    if (value < 70) return setVolumeLevel(2);

    setVolumeLevel(3);
  };

  const Icon = levels[volumeLevel];

  return (
    <S.Container>
      <Icon size={24} />

      <RangeInput
        defaultValue={30}
        min="0"
        max="100"
        onInput={handleChangeVolume}
      />
    </S.Container>
  );
};

export { VolumeRange };
