
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

const isFirebaseConfigured = !!firebaseConfig.apiKey;

function initializeFirebaseServices() {
    if (typeof window !== 'undefined' && isFirebaseConfigured) {
        if (!getApps().length) {
            return initializeApp(firebaseConfig);
        } else {
            return getApp();
        }
    }
    return null;
}

export function FirebaseClientProvider({ children }: FirebaseClientProviderProps) {
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
