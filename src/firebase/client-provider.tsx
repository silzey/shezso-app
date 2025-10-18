
'use client';

import React, { useMemo, type ReactNode } from 'react';
import { FirebaseProvider } from '@/firebase/provider';
import { initializeApp, getApps, getApp, type FirebaseApp } from 'firebase/app';
import { getAuth, type Auth } from 'firebase/auth';
import { getFirestore, type Firestore } from 'firebase/firestore';
import { firebaseConfig } from '@/firebase/config';

interface FirebaseClientProviderProps {
  children: ReactNode;
}

// This function initializes Firebase services, but only on the client side.
function initializeFirebaseServices() {
    if (typeof window !== 'undefined') {
        if (!getApps().length) {
            return initializeApp(firebaseConfig);
        } else {
            return getApp();
        }
    }
    return null; // Return null on the server
}

export function FirebaseClientProvider({ children }: FirebaseClientProviderProps) {
  // Use useMemo to ensure Firebase is initialized only once per client session.
  const { firebaseApp, auth, firestore } = useMemo(() => {
    const app = initializeFirebaseServices();
    if (app) {
      const authInstance = getAuth(app);
      const firestoreInstance = getFirestore(app);
      return { firebaseApp: app, auth: authInstance, firestore: firestoreInstance };
    }
    return { firebaseApp: null, auth: null, firestore: null };
  }, []);

  return (
    <FirebaseProvider
      firebaseApp={firebaseApp}
      auth={auth}
      firestore={firestore}
    >
      {children}
    </FirebaseProvider>
  );
}
