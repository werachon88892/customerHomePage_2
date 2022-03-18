import SlickSlider from "../UI/Carousel/slick";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

import SliderData from "../../../public/data/sliderData.json";
const NextArrow = ({ className, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      <i className="arrow_right" />
    </button>
  );
};

const PrevArrow = ({ className, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      <i className="arrow_left" />
    </button>
  );
};

const Slider = () => {
  const { t } = useTranslation("home");
  const router = useRouter();
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    dots: true,
    autoplay: false,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1229,
        settings: {
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 650,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  };
  return (
    <div className="slides_wrapper">
      <div className="slider_home">
        <SlickSlider settings={settings}>
          {SliderData.map((item, index) => {
            return (
              <div className={`slider-2`} key={item.id}>
                <div
                  className={"single_slider" + `  single_slider_${index}`}
                  style={{
                    backgroundImage: `url(${"images/slider/" +  item.bg_en})` }}
                >
                  <div className="slider_item_tb">
                    <div className="slider_item_tbcell">
                      <div className="container">
                        <div className="row">
                          <div className="col-lg-6 col-sm-12">
                            <h2
                              dangerouslySetInnerHTML={{
                                __html: t(item[`title_${router.locale}`]),
                              }}
                            />
                            <p>{t(item[`description_${router.locale}`])}</p>
                            <div className="slider_btn">
                              <Link href={`${item.btnLink}`}>
                                <a className={`slider_btn_one slider_btn_${index}`}>
                                {t(item[`btnText_${router.locale}`])}
                                </a>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </SlickSlider>
      </div>
    </div>
  );
};

export default Slider;
