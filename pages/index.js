import Header from "../src/components/Header";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Home from "../src/pages/home/Home";
import MainLayout from "../src/pages/MainLayout";
import { wrapper } from "../src/redux/store";
import { getLastesNews, getCategories } from "../helpers/getNews";
import {getAboutData} from "../helpers/getAbout"
import {getExternalLinks} from "../helpers/getExternalLinks"

function HomePage() {
  const { t, ready } = useTranslation("common");

  return (
    <div>
      <Header title={ready && t("title")} />
      <MainLayout>
        <Home />
      </MainLayout>
    </div>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ locale }) => {
      const latestNews = await getLastesNews();
      const categories = await getCategories();
      const aboutData = await getAboutData();
      const externalLinks = await getExternalLinks();
      return {
        props: {
          ...(await serverSideTranslations(locale, [
            "common",
            "home",
            "navbarItems",
            "footer",
            "about",
            "news",
          ])),
          ...(await store.dispatch({
            type: "LATESTNEWS",
            payload: latestNews,
          })),
          ...(await store.dispatch({
            type: "CATEGORIES",
            payload: categories,
          })),
          ...(await store.dispatch({
            type: "ABOUTDATA",
            payload: aboutData,
          })),
          ...(await store.dispatch({
            type: "EXTERNALLINKS",
            payload: externalLinks,
          })),
        },
      };
    }
);
export default HomePage;
