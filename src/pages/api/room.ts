import { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuid } from 'uuid';

import { FieldValue } from 'firebase-admin/firestore';

import { HTTPMethods, StatusCode } from 'types';
import { firestore } from 'services';

const handle = async (request: NextApiRequest, response: NextApiResponse) => {
  const method = request.method as HTTPMethods;

  if (method !== HTTPMethods.POST)
    return response
      .status(StatusCode.METHOD_NOT_ALLOWED)
      .json({ error: 'method not allowed' });

  const id = uuid();

  try {
    const doc = { id, created_at: FieldValue.serverTimestamp() };

    await firestore.doc(`room/${id}`).create(doc);
    await firestore.doc(`thread/${id}`).create(doc);

    response.status(StatusCode.OK).json({ roomId: id });
  } catch (err) {
    console.error(err);

    response.status(StatusCode.INTERNAL_SERVER_ERROR).json({
      error: 'An internal server error has occurred',
    });
  }
};

export default handle;
