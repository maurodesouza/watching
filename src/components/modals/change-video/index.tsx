import { FormEvent } from 'react';

import { BaseModal } from '../base';
import { SimpleInput } from 'components';

import { events } from 'app';
import * as S from './styles';

const ChangeVideoModal = () => {
  const handleChangeVideoUrl = (event: FormEvent) => {
    event.preventDefault();

    const input = event.target[0] as HTMLInputElement;
    const url = input.value;

    input.value = '';

    events.player.video(url);
    events.modal.close();
  };

  return (
    <BaseModal title="Change video">
      <S.Container onSubmit={handleChangeVideoUrl}>
        <SimpleInput placeholder="Youtube video url" />
      </S.Container>
    </BaseModal>
  );
};

export { ChangeVideoModal };
