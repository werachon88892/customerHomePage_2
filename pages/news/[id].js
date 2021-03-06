import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Fragment, useEffect, useState } from 'react';
import Header from '../../src/components/Header';
import MainLayout from '../../src/pages/MainLayout';
import Loading from '../../src/pages/Loading';
import { wrapper } from '../../src/redux/store';
import useSWR from 'swr';
import Error from '../_error';
import SingleNews from '../../src/pages/news/SingleNews';
import { getLastesNews, getCategories } from '../../helpers/getNews';
import { getExternalLinks } from '../../helpers/getExternalLinks';

const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  if (res.status !== 200 || data == null) {
    throw data.Error;
  }
  return data;
};
const SingleNewsPage = () => {
  const { query } = useRouter();
  const { data, error } = useSWR(
    () =>
      query.id &&
      `${process.env.NEXT_PUBLIC_API_URL}/add_new6/api_news_detail.php?id=${query.id}`,
    fetcher
  );
  const router = useRouter();
  const [singleNews, setSingleNews] = useState(null);
  useEffect(() => {
    let isMount = true;

    if (isMount && data !== undefined) {
      setSingleNews(data[0]);
    }
    return () => {
      isMount = false;
    };
  }, [data, router]);
  console.log(singleNews);
  return (
    <Fragment>
      {singleNews !== null && singleNews !== undefined && (
        <Header title={singleNews[`title_${router.locale}`]} />
      )}
      {singleNews === null && error !== undefined ? (
        <Error locale={router.locale} />
      ) : singleNews == null ? (
        <MainLayout>
          <Loading />
        </MainLayout>
      ) : (
        <MainLayout>
          <SingleNews news={singleNews} />
        </MainLayout>
      )}
    </Fragment>
  );
};
export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ locale }) => {
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

export default SingleNewsPage;
