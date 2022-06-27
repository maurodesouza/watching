import { useRouter } from 'next/router';
import * as S from './styles';

const RoomTemplate = () => {
  const { query } = useRouter();

  return (
    <S.Container>
      <strong>Room:</strong> {query.id}
    </S.Container>
  );
};

export { RoomTemplate };
