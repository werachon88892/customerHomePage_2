import { Fragment, useEffect } from "react";
import Link from "next/link";
import moment from "moment";
import "moment/locale/zh-cn";
import { useRouter } from "next/router";
import PropsType from "prop-types";
import styles from "../../../styles/News.module.css";

const NewsListPage = ({ newsData, t, filterData, setFilterData }) => {
  const router = useRouter();
  moment.locale(router.locale == "cn" ? "zh-cn" : "en");

  useEffect(()=>{
    let isMount = true;
    if(isMount && typeof window !== 'undefined'){
      for (let index = 0; index < filterData.length; index++) {
        const element = document.getElementById(`news_${index}`)
        const news = filterData[index]
        element.innerHTML = news[`detail_${router.locale}`].slice(0, 500) + "..."
      }
    }
  }, [filterData])

  return (
    <Fragment>
      <div className="col-md-8 col-sm-12 blog-area">
        {filterData.map((news, i) => {
          return (
            <div className="blog-warp-1 blog_warp_lay_1" key={news.id}>
              <div className="blog_imgg">
                <img src={news.picture} alt="service" />
              </div>
              <div className="blog_content_warp">
                <Link href={`/news/${news.id}`} className="blog_datee">
                  <a className="fa fa-calendar">
                    <i></i>
                    &nbsp;&nbsp;{moment(news.date).format("ll")}
                  </a>
                </Link>
                <div className={styles.listTags}>
                  {news[`tag_${router.locale}`] !== undefined &&
                    news[`tag_${router.locale}`].map((tag, index) => {
                      return (
                        <Fragment key={tag.id}>
                          <Link href={`/news/${news.id}`} className="subtext">
                            <a className="fa fa-tag">
                              &nbsp;{tag.tags}&nbsp;&nbsp;
                            </a>
                          </Link>
                        </Fragment>
                      );
                    })}
                </div>
                <h5>
                  <Link href={`/news/${news.id}`}>
                    {news[`title_${router.locale}`]}
                  </Link>
                </h5>
                <div id={`news_${i}`}></div>
                <Link href={`/news/${news.id}`}>
                  <a className="more-link">{t("readMoreArticle")}</a>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

NewsListPage.propsType = {
  newsData: PropsType.array.isRequired,
  t: PropsType.func.isRequired,
};
export default NewsListPage;
