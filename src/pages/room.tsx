import { GetServerSideProps } from 'next';

import { RoomTemplate } from 'templates';
import { firestore } from 'services';

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
