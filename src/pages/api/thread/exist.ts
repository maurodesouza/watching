import { NextApiRequest, NextApiResponse } from 'next';

import { HTTPMethods, StatusCode } from 'types';
import { firestore } from 'services';

const handle = async (request: NextApiRequest, response: NextApiResponse) => {
  const method = request.method as HTTPMethods;

  if (method !== HTTPMethods.GET)
    return response
      .status(StatusCode.METHOD_NOT_ALLOWED)
      .json({ error: 'method not allowed' });

  try {
    const query = firestore.doc(`/thread/${request.query.id}`);
    const thread = await query.get();

    response.status(StatusCode.OK).json({ exists: thread.exists });
  } catch (err) {
    console.error(err);

    response.status(StatusCode.INTERNAL_SERVER_ERROR).json({
      error: 'An internal server error has occurred',
    });
  }
};

export default handle;
