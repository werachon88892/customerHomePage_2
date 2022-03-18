import { appWithTranslation } from "next-i18next";
import { wrapper } from "../src/redux/store";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "../styles/assets/icon/elegant-icons/style.css";
import "../styles/assets/icon/icofont/icofont.min.css";
import "../styles/assets/css/normalize.css";
import "../styles/assets/css/style.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/assets/css/responsive.css";
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(appWithTranslation(MyApp))
