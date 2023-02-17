import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faChevronCircleDown,
  faChevronDown,
  faGlobe,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { faBell, faCircleQuestion } from "@fortawesome/free-regular-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="header bg-slate-900">
      <div className="header--wrapper mx-[var(--app-margin)]">
        <div className="header__route">
          <div className="header__route--left">
            <a className="header__route__item" href="#">
              Kênh Người Bán
            </a>
            <div className="item-line"></div>
            <a className="header__route__item" href="#">
              Trở thành Người bán Shopee
            </a>
            <div className="item-line"></div>
            <a className="header__route__item" href="#">
              Tải ứng dụng
            </a>
            <div className="item-line"></div>
            <a className="header__route__item" href="#">
              Kết nối
            </a>
            <FontAwesomeIcon className="ml-[4px] fa-icon" icon={faFacebook} />
            <FontAwesomeIcon className="ml-[2px] fa-icon" icon={faInstagram} />
          </div>
          <div className="header__route--right">
            <a className="header__route__item">
              <FontAwesomeIcon className="fa-icon mr-[4px] " icon={faBell} />
              Thông báo
            </a>
            <a className="header__route__item">
              <FontAwesomeIcon
                className="fa-icon mr-[4px]"
                icon={faCircleQuestion}
              />
              Hỗ Trợ
            </a>
            <a className="header__route__item">
              <FontAwesomeIcon className="fa-icon mr-[4px]" icon={faGlobe} />
              Tiếng Việt
              <FontAwesomeIcon
                className="fa-icon ml-[4px]"
                icon={faChevronDown}
              />
              <i className="fa-solid fa-icon fa-chevron-down"></i>
            </a>
            <a className="header__route__item text-green-400 !text-[18px]">
              Đăng ký
            </a>
            <div className="item-line2 !bg-green-400"></div>
            <a className="header__route__item ml-4 text-green-400 !text-[18px]">
              Đăng nhập
            </a>
          </div>
        </div>
        <div className="header__container">
          <Link
            to="/"
            className="header__icon overflow-hidden w-[180px] h-[80px] mt-[-14px]"
          >
            <img
              className="w-[220px] h-[156px] ml-[-20px] mt-[-38px] max-w-none"
              src={require("../../assets/images/2a.png")}
            />
          </Link>
          <div className="header__filter max-w-[1100px]">
            <div className="header__search">
              <input
                placeholder="Máy Tính Ryzen 10"
                className="header__search--input text-black px-[10px]"
              />
              <button className="header__search--btn bg-green-600">
                <FontAwesomeIcon className="fa-icon" icon={faMagnifyingGlass} />
              </button>
            </div>
            <div className="header__items">
              <a className="header__item">Áo Khoác</a>
              <a className="header__item">Dép</a>
              <a className="header__item">Túi Xách</a>
              <a className="header__item">Balo</a>
              <a className="header__item">Quần Baggy</a>
              <a className="header__item">Tai Nghe</a>
              <a className="header__item">Son</a>
            </div>
          </div>
          <div className="header__cart">
            <FontAwesomeIcon className="text-green-500" icon={faCartShopping} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
