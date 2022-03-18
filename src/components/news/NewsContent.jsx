import SectionTitle from "../UI/SectionTitles/SectionTitle";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import NewsCardsHome from "./NewsCardsHome";
import { useRouter } from "next/router";
import moment from "moment";
import "moment/locale/zh-cn";
import { useSelector } from "react-redux";

export default function NewsContent() {
  const { t } = useTranslation("news");
  const { latestNews } = useSelector((state) => state);
  const [newsData, setNewsData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    let isMount = true;
    if (isMount) {
      if(latestNews.success){
        setNewsData(latestNews.data);
      }else{
        setNewsData([]);
        console.log(latestNews.Error)
      }
      
    }
    return () => {
      isMount = false;
    };
  }, [latestNews]);

  moment.locale(router.locale == "cn" ? "zh-cn" : "en");
  return (
    <section className="blog-section" id="blog">
      <div className="container">
        <SectionTitle title={t("latest")} />
        <div className="row">
          {newsData.map((news, i) => (
            <NewsCardsHome
              key={news.id}
              id={news.id}
              thumb={news.picture}
              title={news[`title_${router.locale}`]}
              content={news[`detail_${router.locale}`]}
              publishDate={moment(news.date).format("ll")}
              tags={news[`tag_${router.locale}`]}
              t={t}
              readMore={t("readMoreArticle")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
