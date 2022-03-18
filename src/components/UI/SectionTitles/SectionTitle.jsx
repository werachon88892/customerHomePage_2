import PropTypes from "prop-types";

const SectionTitle = ({ title,subtitle1, subtitle2 }) => {
  return (
    <div className="base-header">
      <h3>{title}:</h3>
      <h5>{subtitle1}</h5>
      <p style={{marginTop: -15}}>{subtitle2}</p>
    </div>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SectionTitle;
