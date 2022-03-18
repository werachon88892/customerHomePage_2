import AboutList from "./AboutList";
import SectionTitle from "../UI/SectionTitles/SectionTitle";
import styles from "../../../styles/About.module.css";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const AboutContent = () => {
  const { t } = useTranslation("about");
  const { aboutData } = useSelector((state) => state);
  const [AboutData, setAboutData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    let isMount = true;
    if (isMount) {
      if (aboutData.success) {
        setAboutData(aboutData.data);
      } else {
        setAboutData([]);
        
      }
    }
    return () => {
      isMount = false;
    };
  }, [aboutData]);
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12 about_bottom_warp">
            <div className="about_list">
              <SectionTitle title={t("title")} />
              <p>{t("text")}</p>
            </div>

            <div className="row about_list_warp">
              {AboutData.map((about, index) => {
                return (
                  <AboutList
                    key={about.id}
                    title={about[`title_${router.locale}`]}
                    text={about[`detail_${router.locale}`].replace(/<\/?[^>]+(>|$)/g, "")}
                    icon={about.picture}
                    t={t}
                  />
                );
              })}
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <img
              src="images/about/about.jpg"
              alt=""
              className={styles.aboutContentImg}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
