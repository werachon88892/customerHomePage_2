import PropsType from "prop-types";
import ReactReadMoreReadLess from "react-read-more-read-less";
import styles from "../../../styles/About.module.css"

const AboutList = ({ icon, title, text, t }) => {
  return (
    <div className="col-md-6 col-sm-12">
      <div className="about_list">
        <div className={`icon-fea  ${icon}`}></div>
        <h5>{title}</h5>
        <p className="about_para">
          <ReactReadMoreReadLess
            charLimit={200}
            readMoreText={t("readMore")}
            readLessText={t("readLess")}
            readMoreClassName={styles.readMoreLessMore}
            readLessClassName={styles.readMoreLessLess}
          >
            {text}
          </ReactReadMoreReadLess>
        </p>
      </div>
    </div>
  );
};

AboutList.propsType = {
  icon: PropsType.string.isRequired,
  title: PropsType.string.isRequired,
  text: PropsType.string.isRequired,
  t: PropsType.func.isRequired
};

export default AboutList;
