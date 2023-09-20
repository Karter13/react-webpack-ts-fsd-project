import { lazy } from 'react';

export const AboutPageAsync = lazy(() => new Promise((resolve) => {
    // for testing => delete after
    // @ts-ignore
    setTimeout(() => resolve(import('./AboutPage')), 1000);
}));
