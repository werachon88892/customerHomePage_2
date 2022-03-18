import brand from "../../../public/data/brand"
import { useRouter } from "next/router";
export default function ContactInfo({t}) {
  const router = useRouter()
  const company = brand.data[`company_${process.env.NEXT_PUBLIC_STATIC_TYPE}_${router.locale}`]
  const address = brand.data[`address_${process.env.NEXT_PUBLIC_STATIC_TYPE}_${router.locale}`]
  const phone = brand.data[`company_phone_${process.env.NEXT_PUBLIC_STATIC_TYPE}`]
  return (
    <div className="row">
    <div className="bottom_contact col-sm-4 col-xs-12"><i className="icon_pin_alt"></i>
        <p>{t("address")}</p>
        <h4>{address}</h4>
    </div>
    <div className="bottom_contact col-sm-4 col-xs-12"><i className="icon_phone"></i>
        <p>{t("phoneTitle")}</p>
        <h4>{phone}</h4>
    </div>
    <div className="bottom_contact col-sm-4 col-xs-12"><i className="icon_clock_alt"></i>
        <p>{t("operationTitle")}</p>
        <h4>{t("operationHours")}</h4>
    </div>
  </div>
  );
}
