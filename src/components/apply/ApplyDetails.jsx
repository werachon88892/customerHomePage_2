import SectionTitle from "../UI/SectionTitles/SectionTitle"
import ApplyInfo from "./ApplyInfo"
import ApplyForm from "./ApplyForm"

export default function ApplyDetails({t}) {
  return (
    <div className="contact-section" id="contact">
      <div className="container">
        <SectionTitle title={t("title")} subtitle1={t("subtitle1")} subtitle2={t("subtitle2")}/>
        <div className="row inner-contact">
        <div className="col-sm-12 contact_info">
          <ApplyInfo t={t} />
        </div>
        <div className="col-sm-12">
          <ApplyForm t={t} />
        </div>
        </div>
      </div>
    </div>
  )
}
