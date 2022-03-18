import Link from "next/link"; 
import { Fragment, useEffect, useState } from "react"; 
import navbarItemsList from "../../../public/data/navbarItemsList.json"; 
import { useTranslation } from "next-i18next"; 
import { useRouter } from "next/router"; 
import { useSelector } from "react-redux"; 
import styles from "../../../styles/Navbar.module.css"; 

const NavbarItems = ({ handleShow }) => {
  const { t } = useTranslation("navbarItems");
  const router = useRouter();
  const { categories } = useSelector((state) => state);
  const [categoriesData, setCategoriesData] = useState([]);
  // handle language change between dynamic route and has query
  const hasQuery = router.asPath.includes("?");
  useEffect(() => {
    let isMount = true;
    if (isMount) {
      if (categories.success) {
        setCategoriesData(categories.data);
      } else {
        setCategoriesData([]);
      }
    }
    return () => {
      isMount = false;
    };
  }, [categories]);
  return (
    <Fragment>
      {navbarItemsList.map((item, i) => {
        const { subMenu, title, link } = item;
        let hasSubmenu = item.subMenu.length > 0 ? true : false;
        return (
   

          <li
	     
            key={item._id.toString()}
            className={
              hasSubmenu || title == "nonews" ? "menuItemHasChildren" : ""
            }
          >{title == "Language" ? (
              <a className={styles.anchor}
		 style={{ padding: '32px 25px 32px 32px' }}
	      >{t(title)}</a>
            ) : title == "links" ? (
              <a className={styles.anchor}
		style={{ padding: '32px 25px 32px 32px' }} 
		onClick={() => { handleShow(); }} >{t(title)}</a>
            ) : (<Link href={link}><a
		 style={{ padding: '32px 25px 32px 32px' }}
		>{t(title)}</a></Link> //// GONG ////
            )}
            {hasSubmenu && (
              <ul className="subMenu">
                {subMenu.map((subItem) => {
                  if (title == "Language") {
                    return (
                      <li key={subItem._id.toString()}>
                        <Link
                          href={{
                            pathname: hasQuery ? router.route : router.asPath,
                            query: {},
                          }}
                          replace
                          locale={subItem.locale}
                          scroll={false}
                        ><a>{t(subItem.title)}
                            <img
                              src={"/images/lang" + `/${subItem.Flag}`}
                              alt="lang"
                              className={styles.lang}
                            />
                          </a>
                        </Link>
                      </li>
                    );
                  } else {
                    return (
                      <li key={subItem}><Link
                          href={`${link}?category=${subItem.replace(" ", "")}`}
                        ><a>{subItem}</a>
                        </Link>
                      </li>
                    );
                  }
                })}
              </ul>
            )}
          </li>
        );
      })}
    </Fragment>
  );
};
export default NavbarItems;
