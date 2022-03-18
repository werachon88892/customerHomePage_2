import Link from "next/link";
import PropsType from "prop-types";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const PageHeader = ({ title, bgImg }) => {
  const { t } = useTranslation("navbarItems");
  const router = useRouter();
  const hasQuery = router.pathname.includes("[");
  return (
    <header
      id="page-top"
      className="blog-banner"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="container" id="blog">
        <div className="row blog-header text-left">
          <div className="col-sm-12">
            <h4
              style={{
                color: router.pathname.startsWith("/news") ? "white" : "",
              }}
            >
              <Link href="/">
                <a
                  style={{
                    color: router.pathname.startsWith("/news") ? "white" : "",
                  }}
                >
                  {" "}
                  {t("Home")}{" "}
                </a>
              </Link>{" "}
              {hasQuery && (
                <>
                  <Link href="/news">
                    <a
                      style={{
                        color: router.pathname.startsWith("/news")
                          ? "white"
                          : "",
                      }}
                    >
                      &gt;{" "}
                      {t("news")}{" "}
                    </a>
                  </Link>{" "}
                </>
              )}
              &gt; {title}{" "}
            </h4>
            <h3
              style={{
                color: router.pathname.startsWith("/news") ? "white" : "",
              }}
            >
              {title}
            </h3>
          </div>
        </div>
      </div>
    </header>
  );
};

PageHeader.propsType = {
  title: PropsType.string.isRequired,
  bgImg: PropsType.string.isRequired,
};

export default PageHeader;
