import PropTypes from "prop-types";
import ReactReadMoreReadLess from "react-read-more-read-less";
import styles from "../../../styles/About.module.css";
export default function AboutCards({ title, img, text, t }) {
  return (
    <div className="col-md-4 col-sm-12">
      <div className={`blog-warp-1 blog_warp_lay_1 ${styles.content}`} >
        <div className="blog_imgg">
          <img src={img} alt="" />
        </div>

        <div className={`blog_content_warp ${styles.wrapperContent}`} >
          <p className={styles.title} >{title}</p>
          <p >
            <ReactReadMoreReadLess
              charLimit={200}
              readMoreText={t("readMore")}
              readLessText={t("readLess")}
              readMoreClassName={styles.readMoreLessMore}
              readLessClassName={styles.readMoreLessLess}
            >
              {text.replace(/<\/?[^>]+(>|$)/g, "")}
            </ReactReadMoreReadLess>
          </p>
        </div>
      </div>
    </div>
  );
}

AboutCards.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired,
};
