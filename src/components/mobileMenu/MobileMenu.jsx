import { useEffect } from "react";
import PropsType from "prop-types";
import NavbarItems from "../navbar/NavbarItems";
import { useTranslation } from "next-i18next";

export default function MobileMenu({ hidden, setHidden, handleShow }) {
  const { t } = useTranslation("navbarItems");
  useEffect(() => {
    let isMount = true;
    if (isMount) {
      const offCanvasNav = document.querySelector("#offcanvas-navigation");
      const offCanvasNavSubMenu = offCanvasNav.querySelectorAll(`.subMenu`);
      const anchorLinks = offCanvasNav.querySelectorAll("a");
      for (let i = 0; i < offCanvasNavSubMenu.length; i++) {
        offCanvasNavSubMenu[i].insertAdjacentHTML(
          "beforebegin",
          `<span class="menuExpand"><i></i></span>`
        );
      }
      const menuExpand = offCanvasNav.querySelectorAll(".menuExpand");
      const numMenuExpand = menuExpand.length;
      for (let i = 0; i < numMenuExpand; i++) {
        menuExpand[i].addEventListener("click", (e) => {
          e.preventDefault();
          sideMenuExpand(e);
        });
      }

      for (let i = 0; i < anchorLinks.length; i++) {
        anchorLinks[i].addEventListener("click", () => {
          closeMobileMenu();
        });
      }
    }
    return () => {
      isMount = false;
    };
  }, []);
  const sideMenuExpand = (e) => {
    e.preventDefault();
    e.currentTarget.parentElement.classList.toggle("active");
  };

  const closeMobileMenu = () => {
    const offcanvasMobileMenu = document.querySelector(
      "#offcanvas-mobile-menu"
    );
    offcanvasMobileMenu.classList.remove("active");
    setHidden(!hidden);
  };

  return (
    <div
      className="offcanvasMobileMenu"
      id="offcanvas-mobile-menu"
      hidden={hidden}
    >
      <button
        className="offcanvasMenuClose"
        id="mobile-menu-close-trigger"
        onClick={() => closeMobileMenu()}
      >
        <i className="icon_close"></i>
      </button>

      <div className="offcanvasWrapper">
        <div className="offcanvasInnerContent">
          <nav className="offcanvasNavigation" id="offcanvas-navigation">
            <ul>
              <NavbarItems handleShow={handleShow}/>
            </ul>
          </nav>

          {/* Search Form */}
          <div className="offcanvasMobileSearchArea">
            {/* <form action="#">
              <input type="search" placeholder="search" />
              <button type="submit"></button>
            </form> */}
          </div>

          {/* Contact Info  */}

          <div className="header_top_right list-unstyled">
            <ul>
              <li>
                <i className="fa fa-phone"></i> +(4122) 5186 162
              </li>
              <li>
                <i className="fa fa-envelope"></i>
                system@green-entrepreneurship.cc
              </li>
              <li>
                <i className="fa fa-globe"></i> {t("address")}
              </li>
            </ul>
          </div>

          {/* Social Icon*/}
          <div className="header_top_left">
            <ul className="header_socil list-inline">
              <li>
                <a
                  rel="noopener noreferrer"
                  href="//facebook.com"
                  target="_blank"
                >
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  href="//twitter.com"
                  target="_blank"
                >
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  href="//instagram.com"
                  target="_blank"
                >
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  href="//pinterest.com"
                  target="_blank"
                >
                  <i className="fa fa-pinterest"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

MobileMenu.propsType = {
  hidden: PropsType.bool.isRequired,
  setHidden: PropsType.func.isRequired,
};
