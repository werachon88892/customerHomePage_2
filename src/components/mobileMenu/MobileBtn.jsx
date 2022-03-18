import PropTypes from "prop-types";

export default function MobileBtn({ hidden, setHidden }) {
  const triggerMobileMenu = () => {
    const offcanvasMobileMenu = document.querySelector(
      "#offcanvas-mobile-menu"
    );
    offcanvasMobileMenu.classList.add("active");
    setHidden(!hidden);
  };
  return (
    <div>
      <div className="header-btn-wrapper">
        <div className="mobile-button-wrapper d-block d-lg-none text-right">
          <button
            className="mobile-aside-button"
            onClick={() => triggerMobileMenu()}
          >
            <i className="icon_menu"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

MobileBtn.propTypes = {
  hidden: PropTypes.bool.isRequired,
  setHidden: PropTypes.func.isRequired,
};
