import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Article, ArticleList, ArticleView } from '../../../../entities/Article';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}

const article = {} as Article;

const ArticlesPage = ({ className }: ArticlesPageProps) => {
    const { t } = useTranslation('article');

    return (
        <div className={classNames(cls.ArticlesPage, {}, [className])}>
            <ArticleList
                view={ArticleView.BIG}
                articles={
                    new Array(16)
                        .fill(0)
                        .map((item, index) => ({
                            ...article,
                            id: String(index),
                        }))
                }

            />
        </div>
    );
};

export default memo(ArticlesPage);
