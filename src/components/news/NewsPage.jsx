import SectionTitle from "../UI/SectionTitles/SectionTitle";
import { useTranslation } from "next-i18next";
import { Fragment, useEffect, useState } from "react";
import "moment/locale/zh-cn";
import { useSelector } from "react-redux";
import PageWrapper from "../UI/PageWrapper";
import NewsListPage from "./NewsListPage";
import NewsSidebar from "./NewsSidebar";

export default function NewsPage() {
  const { t } = useTranslation("news");
  const { allNews, latestNews } = useSelector((state) => state);
  const [newsData, setNewsData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [filterd, setFilterd] = useState(false);
  const [latestNewsData, setLatestNewsData] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    let isMount = true;
    if (isMount) {
      if (allNews.success) {
        setNewsData(allNews.data);
        setFilterData(allNews.data);
      } else {
        setNewsData([]);
        setFilterData([]);
        console.log(allNews.Error);
      }
    }
    return () => {
      isMount = false;
    };
  }, [allNews]);

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

  useEffect(() => {
    let isMount = true;
    if (isMount && !filterd) {
      setFilterData(allNews.data);
    }
    return () => {
      isMount = false;
    };
  }, [filterd]);
  
  return (
    <Fragment>
      <PageWrapper classes="blog_container blog_page_one">
        <NewsListPage
          newsData={newsData}
          t={t}
          setFilterData={setFilterData}
          filterData={filterData}
        />
        <NewsSidebar
          newsData={newsData}
          t={t}
          latestNewsData={latestNewsData}
          setFilterd={setFilterd}
          setFilterData={setFilterData}
          searchText={searchText}
          setSearchText={setSearchText}
        />
      </PageWrapper>
    </Fragment>
  );
}
