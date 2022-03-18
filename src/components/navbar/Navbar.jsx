import { useState, Fragment } from "react";
import Link from "next/link";
import NavbarItems from "./NavbarItems";
import MobileBtn from "../mobileMenu/MobileBtn";
import MobileMenu from "../mobileMenu/MobileMenu";
import Image from "next/image";
import { useRouter } from "next/router";
import LinksModal from "./LinksModal";
import brand from "../../../public/data/brand"

export default function Navbar() {
  const [hidden, setHidden] = useState(true);
  const router = useRouter();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

const logo = brand.data[`logo_${process.env.NEXT_PUBLIC_STATIC_TYPE}_${router.locale}`]
  
  return (
    <Fragment>
      <LinksModal show={show} handleClose={handleClose} />
      <div className="menu_area">
        <div className="navigation">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="header_logo">
                  <Link href="/">
                    <a>
                      <Image
                        src={logo}
                        alt=""
                        width={210}
                        height={50}
                      />
                    </a>
                  </Link>
                </div>
                <MobileBtn hidden={hidden} setHidden={setHidden} handleShow={handleShow}/>
                <MobileMenu hidden={hidden} setHidden={setHidden} handleShow={handleShow}/>
                <div id="navigation">
                  <ul>
                    <NavbarItems handleShow={handleShow} />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
