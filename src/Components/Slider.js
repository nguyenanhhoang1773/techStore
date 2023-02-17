import Slick from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "./Slide.css";

function PrevArrow(props) {
  const { className, style, onClick, custom } = props;
  return (
    <div
      className={`${className} arrow !w-auto !h-auto !left-[-56px]`}
      style={{ ...style, display: "block", background: "transparent" }}
      onClick={onClick}
    >
      <FontAwesomeIcon
        className="w-[46px] h-[48px] text-[var(--color-primary)]"
        icon={faChevronLeft}
      />
    </div>
  );
}
function NextArrow(props) {
  const { className, style, onClick, custom } = props;
  return (
    <div
      className={`${className} arrow !w-auto !h-auto !right-[-56px] `}
      style={{ ...style, display: "block", background: "transparent" }}
      onClick={onClick}
    >
      <FontAwesomeIcon
        className="w-[46px] h-[48px] text-[var(--color-primary)]"
        icon={faChevronRight}
      />
    </div>
  );
}
function Slider({ children, props, customPrev, customNext, scroll }) {
  const sliderSetting = {
    infinite: true,
    speed: 300,
    autoplay: scroll ? true : false,
    autoplaySpeed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    ...props,
    prevArrow: <PrevArrow custom={customPrev} />,
    nextArrow: <NextArrow custom={customNext} />,
  };
  return <Slick {...sliderSetting}>{children}</Slick>;
}
export default Slider;
