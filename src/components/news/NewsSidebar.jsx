import Sidebar from "../UI/Sidebar";
import SidebarItem from "../UI/Sidebar/SidebarItem";
import RecentNews from "../UI/RecentNews";
import { useRouter } from "next/router";
import List from "../UI/List";
import LI from "../UI/List/Item";
import PropTypes from "prop-types";
import moment from "moment";
import "moment/locale/zh-cn";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";

export function escapeRegExp(value) {
  return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

export default function NewsSidebar({
  newsData,
  t,
  latestNewsData,
  setFilterd,
  setFilterData,
  searchText,
  setSearchText,
}) {
  const router = useRouter();
  moment.locale(router.locale == "cn" ? "zh-cn" : "en");
  const [tagsArr, setTagsArr] = useState([]);
  const [tagsFilters, setTagsFilters] = useState([]);
  const [categoryArr, setCategoryArr] = useState([]);
  const { categories } = useSelector((state) => state);
 
  useEffect(() => {
    let isMount = true;
    if (isMount) {
      const allTages = [];
      newsData.forEach((element) => {
        
        allTages.push(...element[`tag_${router.locale}`].filter((item)=>{if(item.tags !== '')return item}));
        return allTages;
      });
      setTagsArr(
        allTages.filter(
          (value, index, self) =>
            self.findIndex((m) => m.tags === value.tags) === index
        )
      );
      if (categories.success && categories.Error == "") {
        setCategoryArr(categories.data);
      }
    }
    return () => {
      isMount = false;
    };
  }, [newsData, router.locale, categories]);
  const tagsClicked = (tag) => {
    setFilterd(true);
    requestSearch("");
    if (!tagsFilters.includes(tag)) {
      setTagsFilters((oldArray) => [...oldArray, tag]);
    } else {
      const index = tagsFilters.indexOf(tag);
      if (index > -1) {
        tagsFilters.splice(index, 1);
      }
      setTagsFilters((oldArray) => [...oldArray]);
    }
  };

  useEffect(() => {
    let isMount = true;
    if (isMount) {
      const filterNews = newsData.filter((array) =>
        tagsFilters.every((filter) => {
          if (array[`tag_${router.locale}`].map((i) => i.tags).includes(filter))
            return !(filter === array[`tag_${router.locale}`]);
        })
      );
      setFilterData(filterNews);
    }
    return () => {
      isMount = false;
    };
  }, [tagsFilters]);

  useEffect(() => {
    let isMount = true;
    if (isMount) {
      if (router.query?.category !== undefined) {
        let filterCateg = [];
        newsData.map((item) => {
          if (
            item[`categories_${router.locale}`] !== null &&
            router.query?.category ==
              item[`categories_${router.locale}`].replace(/\s/g, "")
          ) {
            filterCateg.push(item);
          }
        });

        setFilterData(filterCateg);
      }
    }
    return () => {
      isMount = false;
    };
  }, [router, newsData]);

  const requestSearch = (searchValue) => {
    setSearchText(searchValue);
    const searchRegex = new RegExp(escapeRegExp(searchValue), "i");
    const filterdData = newsData.filter((row) => {
      return Object.keys(row).some((field) => {
        return searchRegex.test(row[field].toString());
      });
    });
    setFilterData(filterdData);
  };

  return (
    <Sidebar classes="col-md-4 col-sm-12 widget-area">
      <SidebarItem classes={"widget widget-search"}>
        <div className="input-group">
          <input
            className="form-control"
            placeholder={t("search")}
            type="text"
            value={searchText}
            onChange={(e) => requestSearch(e.target.value)}
          />
          <span className="input-group-btn">
            <button type="button">
              {searchText == "" ? (
                <i className="fa fa-search"></i>
              ) : (
                <i
                  className="fa fa-close"
                  onClick={() => requestSearch("")}
                ></i>
              )}
            </button>
          </span>
        </div>
      </SidebarItem>
      <SidebarItem
        title={t("recentPosts")}
        classes={"widget wiget-recent-post"}
      >
        {latestNewsData.map((news, i) => {
          return (
            <RecentNews
              key={news.id}
              _id={news.id}
              title={t(news[`title_${router.locale}`])}
              publishDate={moment(news.date).format("ll")}
              thumb={news.picture}
            />
          );
        })}
      </SidebarItem>
      <SidebarItem
        title={t("newsCategories")}
        classes={"widget widget-post-categories"}
      >
        <List classes={"categories-type"}>
          {categoryArr.map((category, i) => {
            return (
              <LI key={category.id}>
                <Link
                  href={`/news?category=${category[
                    `categories_name_${router.locale}`
                  ].replaceAll(" ", "")}`}
                  scroll={false}
                >
                  <div
                    style={{
                      cursor: "pointer",
                      color:
                        router.query?.category ==
                        category[`categories_name_${router.locale}`].replaceAll(
                          " ",
                          ""
                        )
                          ? "#33cc33"
                          : "#363636",
                    }}
                  >
                    {category[`categories_name_${router.locale}`]}
                  </div>
                </Link>
              </LI>
            );
          })}
        </List>
      </SidebarItem>
      <SidebarItem title={t("topTags")} classes={"widget widget-tags"}>
        {tagsArr.map((data, i) => {
          const clicked = tagsFilters.indexOf(data.tags) !== -1;
          return (
            <button
              key={i}
              onClick={() => tagsClicked(data.tags)}
              style={{ backgroundColor: clicked ? "#33cc33" : "#363636" }}
            >
              {data.tags}
            </button>
          );
        })}
        <br />
        <button
          style={{
            width: "100%",
            backgroundColor: "#33cc33",
            display:
              tagsFilters.length !== 0 || router.query?.category !== undefined
                ? "block"
                : "none",
            marginTop: 30,
          }}
          onClick={() => {
            setFilterd(false);
            setTagsFilters([]);
            router.push("/news", undefined, { scroll: false });
          }}
        >
          {t("ClearFilter")}
        </button>
      </SidebarItem>
    </Sidebar>
  );
}

NewsSidebar.propTypes = {
  newsData: PropTypes.array.isRequired,
  t: PropTypes.func.isRequired,
  latestNewsData: PropTypes.array.isRequired,
  setFilterd: PropTypes.func.isRequired,
  setFilterData: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
  setSearchText: PropTypes.func.isRequired,
};
