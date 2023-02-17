import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { StartIcon } from "../assets/icon";
import router from "../router";
import "./Item.scss";
function Item({ src }) {
  const [heartIcon, setHeartIcon] = useState(false);
  const handleMouseOver = () => {
    console.log("vao");
    setHeartIcon((prev) => !prev);
  };
  const handleMouseLeave = () => {
    console.log("ra");
    setHeartIcon((prev) => !prev);
  };
  return (
    <div className="inline-block text-[var(--text-primary)]  w-full  p-[10px]">
      <Link
        to={router.Detail}
        className="bg-white block rounded-xl relative hover:cursor-pointer hover:border border-green-500 hover:translate-y-[-4px]"
      >
        <div className="absolute text-shadow top-[16px] left-[-8px] bg-[var(--color-primary)] p-[4px] rounded-tr-full rounded-tl-[100px] rounded-br-full">
          Giảm 20%
          <div className="absolute top-[100%] left-0 border-[4px] border-[var(--color-primary)] border-b-transparent border-l-transparent "></div>
        </div>
        {/* <div className="absolute top-0 right-0 w-[60px] h-[40px] text-[14px] text-white text-center bg-green-500">
          <p className="text-black">20%</p>
          <p className="">Giảm</p>
          <div className="border-[30px] border-t-[4px] border-b-[16px] border-b-transparent  absolute top-[100%] border-green-500"></div>
        </div> */}

        <img className="p-[10px]" src={src} />
        <div className="p-[10px] ">
          <a className="text-[14px] text-[rgba(0,0,0,0.9)]">
            Áo Polo Teelab, Polo form rộng vai ca chuong
          </a>
          <div className="mt-[2px] ">
            <span className="text-[20px] line-through text-[rgba(0,0,0,0.4)]">
              150.000đ
            </span>
            <span className="text-[28px] ml-[10px] text-green-500">
              125.000đ
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
