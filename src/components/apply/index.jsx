import React, { Fragment } from "react";
import { useTranslation } from "next-i18next";
import PageHeader from "../UI/PageHeader/PageHeader";
import ApplyDetails from "./ApplyDetails";

export default function ContactComponent() {
  const { t } = useTranslation("apply");
  return (
    <Fragment>
      <PageHeader
        bgImg={`../images/contact/header.jpg`}
        title={t("title")}
      />
      <ApplyDetails t={t}/>
    </Fragment>
  );
}
