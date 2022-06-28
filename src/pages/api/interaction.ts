import { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuid } from 'uuid';

import { FieldValue } from 'firebase-admin/firestore';

import { HTTPMethods, StatusCode } from 'types';
import { firestore } from 'services';

const handle = async (request: NextApiRequest, response: NextApiResponse) => {
  const method = request.method as HTTPMethods;
  const body = JSON.parse(request.body);

  const { threadId, event, data = {} } = body;

  if (method !== HTTPMethods.POST)
    return response
      .status(StatusCode.METHOD_NOT_ALLOWED)
      .json({ error: 'method not allowed' });

  try {
    const interactionId = uuid();

    const doc = {
      id: interactionId,
      type: event,
      data,
      created_at: FieldValue.serverTimestamp(),
    };

    await firestore
      .doc(`thread/${threadId}/interactions/${interactionId}`)
      .create(doc);

    response.status(StatusCode.OK).json({});
  } catch (err) {
    console.error(err);

    response.status(StatusCode.INTERNAL_SERVER_ERROR).json({
      error: 'An internal server error has occurred',
    });
  }
};

export default handle;
