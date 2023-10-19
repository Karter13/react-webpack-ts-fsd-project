import { lazy } from 'react';

export const ProfilePageAsync = lazy(() => new Promise((resolve) => {
    // for testing => delete after
    // @ts-ignore
    setTimeout(() => resolve(import('./ProfilePage')), 1000);
}));
