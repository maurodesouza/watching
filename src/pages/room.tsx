import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';

import { firestore } from 'services';

const RoomTemplate = dynamic(
  () => import('../templates/room').then(result => result.RoomTemplate),
  {
    ssr: false,
  }
);

const Room = () => <RoomTemplate />;

export default Room;

export const getServerSideProps: GetServerSideProps = async context => {
  try {
    const query = firestore.doc(`/room/${context.query.id}`);
    const room = await query.get();

    if (!room.exists)
      return {
        props: {},
        redirect: {
          permanent: false,
          destination: '/',
        },
      };

    return {
      props: {},
    };
  } catch (err) {
    console.error(err);

    return {
      props: {},
      redirect: {
        permanent: false,
        destination: '/',
      },
    };
  }
};
