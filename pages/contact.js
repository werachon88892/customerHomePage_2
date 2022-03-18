import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Fragment } from "react";
import Header from "../src/components/Header";
import MainLayout from "../src/pages/MainLayout";
import Contact from "../src/pages/contact/Contact";
import { wrapper } from "../src/redux/store";
import { getLastesNews, getCategories } from "../helpers/getNews";
import { getExternalLinks } from "../helpers/getExternalLinks";

export default function ContactPage() {
  const { t, ready } = useTranslation("contact");
  return (
    <Fragment>
      <Header title={ready && t("title")} />
      <MainLayout>
        <Contact />
      </MainLayout>
    </Fragment>
  );
}
export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ locale }) => {
      const latestNews = await getLastesNews();
      const categories = await getCategories();
      const externalLinks = await getExternalLinks();
      return {
        props: {
          ...(await serverSideTranslations(locale, [
            "common",
            "home",
            "contact",
            "navbarItems",
            "footer",
            "404",
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
            type: "EXTERNALLINKS",
            payload: externalLinks,
          })),
        },
      };
    }
);
