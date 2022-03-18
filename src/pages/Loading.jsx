import React, { Fragment } from "react";
import styles from "../../styles/Loading.module.css";
import Header from "../components/Header";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

export default function Loading() {
  const router = useRouter();
  const { t } = useTranslation("common");
  return (
    <Fragment>
      <Header title={t(`loading_${router.locale}`)} />
      <div className={styles.container}>
        <img
          src="/images/pre_loader.gif"
          alt="loading"
          className={styles.gifLoaging}
        />
      </div>
    </Fragment>
  );
}
