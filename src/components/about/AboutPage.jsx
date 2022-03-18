import { useState, useEffect } from "react";
import SectionTitle from "../UI/SectionTitles/SectionTitle";
import { useTranslation } from "next-i18next";
import styles from "../../../styles/About.module.css";
import AboutCards from "./AboutCards";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const Aboutpage = () => {
  const { t } = useTranslation("about");
  const { aboutCards } = useSelector((state) => state);
  const [AboutCardsData, setAboutCardsData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    let isMount = true;
    if (isMount) {
      if (aboutCards.success) {
        setAboutCardsData(aboutCards.data);
      } else {
        setAboutCardsData([]);
        console.log(aboutCards.Error);
      }
    }
  }, [aboutCards]);
  return (
    <div>
      <SectionTitle title={t("title")} />
      <p className={styles.aboutTitleSection}>{t("subtitle")}</p>
      <div className={styles.cardContainer}>
        {AboutCardsData.map((item) => {
          return (
            <AboutCards
              key={item.id}
              title={t(`${item[`title_${router.locale}`]}`)}
              text={t(`${item[`detail_${router.locale}`]}`)}
              img={item.picture}
              t={t}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Aboutpage;
