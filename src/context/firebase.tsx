import { createContext, useEffect, useState } from 'react';

import { initializeApp, FirebaseApp } from 'firebase/app';

import {
  Firestore,
  getFirestore,
  initializeFirestore,
} from '@firebase/firestore';

import { config } from 'app';

type FirebaseContextData = {
  firebaseApp?: FirebaseApp;
  database?: Firestore;
};

type FirebaseProviderProps = {
  children: React.ReactNode;
};

const FirebaseContext = createContext<FirebaseContextData>(
  {} as FirebaseContextData
);

const FirebaseProvider = ({ children }: FirebaseProviderProps) => {
  const [firebaseApp, setFirebaseApp] = useState<FirebaseApp>();
  const [database, setDatabase] = useState<Firestore>();

  const firebaseInit = () => {
    const appFirebase = initializeApp(config.envs.firebase);

    initializeFirestore(appFirebase, {
      experimentalForceLongPolling: true,
    });

    const db = getFirestore(appFirebase);

    setFirebaseApp(appFirebase);
    setDatabase(db);
  };

  useEffect(() => {
    !firebaseApp && firebaseInit();
  }, []);

  return (
    <FirebaseContext.Provider value={{ firebaseApp, database }}>
      {children}
    </FirebaseContext.Provider>
  );
};

export { FirebaseProvider, FirebaseContext };
