import Link from "next/link";
import PropsType from "prop-types";
import { Fragment, useEffect } from "react";
import styles from "../../../styles/News.module.css"
export default function NewsCardsHome(props) {
  const newUrl = `/news/${props.id}`;
  const { thumb, publishDate, tags, title, readMore, content } = props;

  useEffect(()=>{
    let isMount = true;
    if(isMount && typeof window !== 'undefined'){
      const contentSliceP =document.getElementById(`contentSlice${props.id}`);
      contentSliceP.innerHTML = content.slice(0, 200) + "..."
    }
    return()=>{
      isMount = false;
    }
  },[])

 
  return (
    <div className="col-md-4 col-sm-12">
      <div className="blog-warp-1 blog_warp_lay_1">
        <div className="blog_imgg">
          <img src={thumb} alt="service" />
          <div className="publisd-date">
            <Link href={`${newUrl}`} >
              <a className="arrow_right"></a>
            </Link>
          </div>
        </div>

        <div className="blog_content_warp">
          <Link className="blog_datee" href={`${newUrl}`}>
            <a className="fa fa-calendar">&nbsp; {publishDate}</a>
          </Link>
          <br />
          <div className={styles.cardsTags} >
            {tags !== null && tags.map((tag, index) => {
              return (
                <Fragment key={tag.id}>
                  <Link href={`${newUrl}`} className="subtext">
                    <a className="fa fa-tag" >&nbsp;&nbsp;{tag.tags}</a>
                  </Link>
                  <br />
                </Fragment>
              );
            })}
          </div>
          <h5 className={styles.cardsTags} >
            <Link href={`${newUrl}`} >
              <a >{title}</a>
            </Link>
          </h5>
          <div id={`contentSlice${props.id}`}></div>
          {/* <p>{content.slice(0, 200) + "..."}</p> */}
          <Link href={`${newUrl}`} className="blog_btn">
            <a className="fa fa-angle-double-right">{readMore}</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

NewsCardsHome.propsType = {
  thumb: PropsType.string.isRequired,
  publishDate: PropsType.string.isRequired,
  tag: PropsType.array.isRequired,
  title: PropsType.string.isRequired,
  readMore: PropsType.string.isRequired,
  content: PropsType.string.isRequired,
};
