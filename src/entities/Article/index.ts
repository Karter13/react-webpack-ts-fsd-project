export { ArticleDetails } from './ui/ArticleDetails/ArticleDetails';
export type { Article } from './model/types/article';
export type { ArticleDetailsSchema } from './model/types/articleDetailsSchema';

export {
    articleDetailsActions,
    articleDetailsReducer,
} from './model/slice/articleDetailsSlice';

export { getArticleDetailsData } from './model/selectors/articleDetails';