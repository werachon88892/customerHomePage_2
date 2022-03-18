import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Fragment } from 'react';
import Header from '../src/components/Header';
import MainLayout from '../src/pages/MainLayout';
import About from '../src/pages/about/About';
import PageHeader from '../src/components/UI/PageHeader/PageHeader';
import { wrapper } from '../src/redux/store';
import { getLastesNews, getCategories } from '../helpers/getNews';
import { getAboutCards } from '../helpers/getAbout';
import { getExternalLinks } from '../helpers/getExternalLinks';

export default function AboutPage() {
  const { t, ready } = useTranslation('about');
  return (
    <Fragment>
      <Header title={ready && t('title')} />
      <MainLayout>
        <PageHeader
          title={ready && t('title')}
          bgImg='/images/about/header.jpg'
        />
        <About />
      </MainLayout>
    </Fragment>
  );
}
export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ locale }) => {
      const latestNews = await getLastesNews();
      const categories = await getCategories();
      const aboutCards = await getAboutCards();
      const externalLinks = await getExternalLinks();
      return {
        props: {
          ...(await serverSideTranslations(locale, [
            'common',
            'about',
            'navbarItems',
            'footer',
            'news',
          ])),
          ...(await store.dispatch({
            type: 'LATESTNEWS',
            payload: latestNews,
          })),
          ...(await store.dispatch({
            type: 'CATEGORIES',
            payload: categories,
          })),
          ...(await store.dispatch({
            type: 'ABOUTCARDS',
            payload: aboutCards,
          })),
          ...(await store.dispatch({
            type: 'EXTERNALLINKS',
            payload: externalLinks,
          })),
        },
      };
    }
);
