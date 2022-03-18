import SectionTitle from "../UI/SectionTitles/SectionTitle"
import ContactInfo from "./ContactInfo"
import ContactForm from "./ContactForm"

export default function ContactDetails({t}) {
  return (
    <div className="contact-section" id="contact">
      <div className="container">
        <SectionTitle title={t("title")} subtitle1={t("subtitle1")} subtitle2={t("subtitle2")}/>
        <div className="row inner-contact">
        <div className="col-sm-12 contact_info">
          <ContactInfo t={t} />
        </div>
        <div className="col-sm-12">
          <ContactForm t={t} />
        </div>
        </div>
      </div>
    </div>
  )
}
