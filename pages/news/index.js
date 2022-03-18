import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Fragment } from 'react';
import Header from '../../src/components/Header';
import MainLayout from '../../src/pages/MainLayout';
import News from '../../src/pages/news/News.jsx';
import {
  getAllNews,
  getLastesNews,
  getCategories,
} from '../../helpers/getNews';
import { wrapper } from '../../src/redux/store';
import PageHeader from '../../src/components/UI/PageHeader/PageHeader';
import { getExternalLinks } from '../../helpers/getExternalLinks';

export default function NewsPage() {
  const { t, ready } = useTranslation('news');
  return (
    <Fragment>
      <Header title={ready && t('title')} />
      <MainLayout>
        <PageHeader
          title={ready && t('title')}
          bgImg='/images/news/header.jpg'
        />
        <News />
      </MainLayout>
    </Fragment>
  );
}
export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ locale }) => {
      const allNews = await getAllNews();
      const latestNews = await getLastesNews();
      const categories = await getCategories();
      const externalLinks = await getExternalLinks();
      return {
        props: {
          ...(await serverSideTranslations(locale, [
            'common',
            'news',
            'navbarItems',
            'footer',
            '404',
          ])),
          ...(await store.dispatch({ type: 'ALLNEWS', payload: allNews })),
          ...(await store.dispatch({
            type: 'LATESTNEWS',
            payload: latestNews,
          })),
          ...(await store.dispatch({
            type: 'CATEGORIES',
            payload: categories,
          })),
          ...(await store.dispatch({
            type: 'EXTERNALLINKS',
            payload: externalLinks,
          })),
        },
      };
    }
);
