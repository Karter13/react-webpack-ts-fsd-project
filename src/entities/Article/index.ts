export { ArticleDetails } from './ui/ArticleDetails/ArticleDetails';
export type { Article } from './model/types/article';
export { ArticleView } from './model/types/article';
export type { ArticleDetailsSchema } from './model/types/articleDetailsSchema';

export { ArticleList } from './ui/ArticleList/ArticleList';

export {
    articleDetailsActions,
    articleDetailsReducer,
} from './model/slice/articleDetailsSlice';

export { getArticleDetailsData } from './model/selectors/articleDetails';

export { ArticleViewSelector } from './ui/ArticleViewSelector/ArticleViewSelector';
