import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { StartIcon } from "../assets/icon";
import router from "../router";
import "./Item.scss";
function Item({ id, title, sale, src, prevPrice, nextPrice }) {
  return (
    <div className="inline-block text-[var(--text-primary)]  w-full  p-[10px]">
      <Link
        to={`/Detail/${id}`}
        className="bg-white block shadow-lg rounded-xl relative hover:cursor-pointer hover:border border-green-500 hover:translate-y-[-4px]"
      >
        <div className="absolute font-[600] text-shadow top-[16px] left-[-8px] bg-[var(--color-primary)] p-[4px] rounded-tr-full rounded-tl-[100px] rounded-br-full">
          Giảm {sale}%
          <div className="absolute top-[100%] left-0 border-[4px] border-[var(--color-primary)] border-b-transparent border-l-transparent "></div>
        </div>
        <img className="p-[10px] w-[284px]" src={src} />
        <div className="px-[16px] py-[6px]">
          <div className="h-[44px] overflow-hidden">
            <a className="text-[16px]   text-[rgba(0,0,0,0.9)]">{title}</a>
          </div>
          <div className="mt-[2px] ">
            <span className="text-[18] line-through text-[rgba(0,0,0,0.4)]">
              {prevPrice}đ
            </span>
            <span className="text-[26px] ml-[10px] text-green-500">
              {nextPrice}đ
            </span>
          </div>
          <div>
            <div className="inline-block mt-[4px] ">
              <StartIcon />
              <StartIcon />
              <StartIcon />
              <StartIcon />
              <StartIcon />
            </div>
            <span className="text-[14px] ml-[10px]">Đã bán 12,2k</span>
            <div className="text-primary text-end px-[10px]">
              <span className="mr-[8px]">Yêu thích</span>
              <span className="heart">
                <FontAwesomeIcon
                  className="heart-prev text-[18px] text-[var(--color-primary)]"
                  icon={faHeart}
                />
                <FontAwesomeIcon
                  className="heart-next text-[18px] text-[var(--color-primary)]"
                  icon={faHeartSolid}
                />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Item;
