import { useState, useEffect } from "react";
import { animateScroll } from "react-scroll";
import Link from "next/link";
import Widget from "../UI/Widget";
import List from "../UI/List";
import LI from "../UI/List/Item";
import { useTranslation } from "next-i18next";
import navbarItemsList from "../../../public/data/navbarItemsList_footer.json";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import brand from "../../../public/data/brand"

export default function Footer() {
  const [scroll, setScroll] = useState(0);
  const [top, setTop] = useState(0);
  const [latestNewsData, setLatestNewsData] = useState([]);
  const router = useRouter();
  const { t } = useTranslation("footer");
  const address = brand.data[`address_${process.env.NEXT_PUBLIC_STATIC_TYPE}_${router.locale}`]
  const { latestNews } = useSelector((state) => state);
  const phone = brand.data[`company_phone_${process.env.NEXT_PUBLIC_STATIC_TYPE}`]
    const email = brand.data[`company_email_${process.env.NEXT_PUBLIC_STATIC_TYPE}`]

  useEffect(() => {
    let isMount = true;
    if (isMount) {
      setTop(100);
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      isMount = false;
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    let isMount = true;
    if (isMount) {
      if (latestNews.success) {
        setLatestNewsData(latestNews.data);
      } else {
        setLatestNewsData([]);
        console.log(latestNews.Error);
      }
    }
    return () => {
      isMount = false;
    };
  }, [latestNews]);
  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row">
          {/*  Start:About  */}
          <div className="col-lg-4 col-sm-12">
            <Widget title={t("disclaimer")}>
              <p>{t("disclaimerDiscription")}</p>
            </Widget>
          </div>
          {/*  End:About  */}

          {/*  Start:Quick Link  */}
          <div className="col-lg-4 col-sm-12">
            <Widget title={t("helpfulLinkTitle")}>
              <List classes="recent-post helpful_post">
                {navbarItemsList
                  .filter((item) => item.title !== "Language")
                  .map((item, index) => {
                    const { title, link } = item;
                    return (
                      <LI key={index}>
                        <Link href={link}>
                          <a >{t(title)}</a>
                        </Link>
                      </LI>
                    );
                  })}
              </List>
            </Widget>
          </div>
          {/*  End:Quick Link  */}

          {/*  Start:Latest post   */}
          <div className="col-lg-4 col-sm-12">
            <Widget title={t("latestNewsTitle")}>
              <List classes="recent-post">
                {latestNewsData.map((news, i) => {
                  return (
                    <LI key={news.id}>
                      <Link href={`/news/${news.id}`}>
                        <a>{news[`title_${router.locale}`]} </a>
                      </Link>
                    </LI>
                  );
                })}
              </List>
            </Widget>
          </div>
          {/*  End:Latest post  */}
          {/*  Start:Subfooter  */}
          <div className="subfooter">
            <div className="copyright_text">
              {" "}
              <Link href="/"><a > &copy;{new Date().getFullYear()}{address}</a></Link>
            </div>

            {/* SOCIAL ICON */}
            <div className="footer_social">
              <ul className="footer_social_icons">
                <li>
                  {" "}
                  <a href="//facebook.com" target="_blank">
                    <i className="fa fa-facebook"></i>
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="//twitter.com" target="_blank">
                    <i className="fa fa-twitter"></i>
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="//instagram.com" target="_blank">
                    <i className="fa fa-instagram"></i>
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="//pinterest.com" target="_blank">
                    <i className="fa fa-pinterest"></i>
                  </a>{" "}
                </li>
              </ul>
            </div>
            <div className="colm" style={{display: "flex", alignItems: "center"}}>
                    <div className="header_wrapper_1">
                        <ul>
                            <li><i className="icon_phone"></i>{phone} </li>
                            <li> <i className="icon_mail_alt"></i>{email}</li>
                        </ul>
                    </div>
                </div>
            <button
              className={`scrollup ${scroll > top ? "show" : ""}`}
              onClick={() => scrollToTop()}
            >
              <span className="arrow_triangle-up"></span>
            </button>
          </div>
          {/* End:Subfooter  */}
        </div>
      </div>
    </footer>
  );
}
