import React, { Fragment } from "react";
import { useTranslation } from "next-i18next";
import PageHeader from "../UI/PageHeader/PageHeader";
import ContactDetails from "./ContactDetails";

export default function ContactComponent() {
  const { t } = useTranslation("contact");
  return (
    <Fragment>
      <PageHeader
        bgImg={`../images/contact/header.jpg`}
        title={t("title")}
      />
      <ContactDetails t={t}/>
    </Fragment>
  );
}
