import { Player, ThreadListener } from 'components';
import { useRouter } from 'next/router';

import * as S from './styles';

const RoomTemplate = () => {
  const { query } = useRouter();

  return (
    <S.Container>
      <Player />

      <ThreadListener threadId={query.id as string} />
    </S.Container>
  );
};

export { RoomTemplate };
