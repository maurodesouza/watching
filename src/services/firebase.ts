import admin from 'firebase-admin';

const serviceAccount = JSON.parse(process.env.FIREBASE_CREDENTIALS);
const credential = admin.credential.cert(serviceAccount);

if (!admin.apps.length) {
  try {
    admin.initializeApp({ credential });
  } catch (error) {
    console.error('Firebase admin initialization error', error.stack);
  }
}

const firestore = admin.firestore();

export { firestore };
