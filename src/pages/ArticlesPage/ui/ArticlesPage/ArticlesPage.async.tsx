import { lazy } from 'react';

export const ArticlesPageAsync = lazy(() => new Promise((resolve) => {
    // for testing => delete after
    // @ts-ignore
    setTimeout(() => resolve(import('./ArticlesPage')), 400);
}));
