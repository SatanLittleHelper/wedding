import { NG_EVENT_PLUGINS } from '@taiga-ui/event-plugins';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { routes } from './app.routes';

const firebaseConfig = {
  apiKey: 'AIzaSyDe02Qf1k9_VQ5t23hafwHhdwDTSUaX1oM',
  authDomain: 'wedding-b9a57.firebaseapp.com',
  databaseURL: 'https://wedding-b9a57-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'wedding-b9a57',
  storageBucket: 'wedding-b9a57.firebasestorage.app',
  messagingSenderId: '879581178512',
  appId: '1:879581178512:web:67b4776beef9583dfe4615',
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withHashLocation()),
    NG_EVENT_PLUGINS,
    provideFirebaseApp(() => initializeApp({ ...firebaseConfig })),
    provideFirestore(() => getFirestore()),
  ],
};
