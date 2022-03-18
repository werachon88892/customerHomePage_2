import PropTypes from "prop-types";
import NewsDetails from "../../components/news/NewsDetails";

export default function SingleNews({ news }) {
  return (
    <div>
      <NewsDetails news={news} />
    </div>
  );
}

SingleNews.propTypes = {
  news: PropTypes.object.isRequired,
};
