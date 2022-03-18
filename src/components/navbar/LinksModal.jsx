import { Fragment, useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Link from "next/link";
import { useSelector } from "react-redux";
import styles from "../../../styles/Navbar.module.css"

const LinksModal = ({ show, handleClose }) => {
  const { t } = useTranslation("navbarItems");
  const { externalLinks } = useSelector((state) => state);
  const [externalLinksData, setExternalLinksData] = useState([]);
  const router = useRouter();
  useEffect(() => {
    let isMount = true;
    if (isMount) {
      if (externalLinks.success) {
        setExternalLinksData(externalLinks.data);
      } else {
        setExternalLinksData([]);
        console.log(externalLinks.Error);
      }
    }
    return () => {
      isMount = false;
    };
  }, [externalLinks]);
  return (
    <Fragment>
      <Modal show={show} onHide={handleClose} dialogClassName={styles.modal}>
        <Modal.Header>
          <Modal.Title>{t("modalHeading")}</Modal.Title>
        </Modal.Header>
        {externalLinksData.map((item, i) => {
          return (
            <Link href={item[`url_${router.locale}`]} key={item.id}>
              <a target="_blank" >
                <Modal.Body
                  className={styles.modalBody}
                  onClick={() => {}}
                >
                  {item[`caption_${router.locale}`]}
                  <div></div>
                </Modal.Body>
              </a>
            </Link>
          );
        })}
        <Modal.Footer>
          <Button
            className={styles.modalButton}
            onClick={handleClose}
          >
            {t("modalClose")}
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default LinksModal;
