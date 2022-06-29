import { useRouter } from 'next/router';

import { Button } from 'components';
import { ApiRoomPostResponse, HTTPMethods } from 'types';

import * as S from './styles';

const HomeTemplate = () => {
  const router = useRouter();

  const handleCreateRoom = async () => {
    const response = await fetch('/api/room', {
      method: HTTPMethods.POST,
    });

    const result = (await response.json()) as ApiRoomPostResponse;

    router.push(`/room?id=${result.roomId}`);
  };

  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>
          <span>W</span>atching<span>.</span>
        </S.Title>

        <S.Text>Watch the best videos together with your friends!</S.Text>

        <Button onClick={handleCreateRoom}>Create room</Button>
      </S.Wrapper>
    </S.Container>
  );
};

export { HomeTemplate };
