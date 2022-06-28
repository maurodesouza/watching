import { useEffect } from 'react';
import {
  collection,
  query,
  onSnapshot,
  where,
  Timestamp,
} from 'firebase/firestore';

import { useFirebase } from 'hooks';
import { events } from 'app';

type ThreadListenerProps = {
  threadId: string;
};

const ThreadListener = ({ threadId }: ThreadListenerProps) => {
  const { database } = useFirebase();

  useEffect(() => {
    if (!database) return;

    const docs = query(
      collection(database, `thread/${threadId}/interactions`),
      where('created_at', '>', Timestamp.now())
    );

    const unsubscribe = onSnapshot(docs, snapshot => {
      snapshot.docChanges().forEach(change => {
        if (change.type === 'added') {
          const event = change.doc.data();

          events.generic.send(event.type, event);
        }
      });
    });

    return () => {
      unsubscribe && unsubscribe();
    };
  }, [threadId, database]);

  return null;
};

export { ThreadListener };
