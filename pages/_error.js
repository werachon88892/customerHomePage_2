import Link from "next/link";
import { Fragment } from "react";
import { wrapper } from "../src/redux/store";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Header from "../src/components/Header";
import MainLayout from "../src/pages/MainLayout";
import { getLastesNews, getCategories } from "../helpers/getNews";
import { getExternalLinks } from "../helpers/getExternalLinks";

function Custom404({ locale }) {
  const { t, ready } = useTranslation("404");
  return (
    <Fragment>
      <Header title={ready && t("title")} />
      <MainLayout>
        <div
          className="errorPage"
          style={{ backgroundImage: `url(../../../images/error/confacts.jpg)` }}
        >
          <div className="container">
            <div className="row">
              <div className="col-sm-12 text-right">
                <h2>{t("OOPS")}</h2>
                <span>{t("PageNotFound")}</span>
                <p>{t("desc")}</p>
                <Link href="/">
                  <a className="more-link">{t("backToHome")}</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </Fragment>
  );
}

export const getStaticProps = wrapper.getStaticProps(
  (store) =>
    async ({ locale }) => {
      const latestNews = await getLastesNews();
      const categories = await getCategories();
      const externalLinks = await getExternalLinks();
      return {
        props: {
          ...(await serverSideTranslations(locale, [
            "404",
            "navbarItems",
            "footer",
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

export default Custom404;
