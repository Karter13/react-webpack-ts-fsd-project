import { lazy } from 'react';

export const MainPageAsync = lazy(() => new Promise((resolve) => {
    // for testing => delete after
    // @ts-ignore
    setTimeout(() => resolve(import('./MainPage')), 1000);
}));
