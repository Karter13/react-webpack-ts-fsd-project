import { lazy } from 'react';

export const ArticleDetailsPageAsync = lazy(() => new Promise((resolve) => {
    // for testing => delete after
    // @ts-ignore
    setTimeout(() => resolve(import('./ArticleDetailsPage')), 1000);
}));
