import { Player } from 'components';
import { useRouter } from 'next/router';

import * as S from './styles';

const RoomTemplate = () => {
  const { query } = useRouter();

  return (
    <S.Container>
      <Player />

    </S.Container>
  );
};

export { RoomTemplate };
