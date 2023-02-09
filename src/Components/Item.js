import { Link } from "react-router-dom";
import { StartIcon } from "../assets/icon";
import router from "../router";
function Item({ src }) {
  return (
    <div className="inline-block text-[var(--text-primary)]  w-full  p-[10px]">
      <Link
        to={router.Detail}
        className="bg-white block rounded-lg relative hover:cursor-pointer hover:border border-green-500 hover:translate-y-[-4px]"
      >
        <div className="absolute top-0 right-0 w-[60px] h-[40px] text-[14px] text-white text-center bg-green-500">
          <p className="text-black">20%</p>
          <p className="">Giảm</p>
          <div className="border-[30px] border-t-[4px] border-b-[16px] border-b-transparent  absolute top-[100%] border-green-500"></div>
        </div>

        <img className="p-[10px]" src={src} />
        <div className="p-[10px] ">
          <a className="text-[14px] text-[rgba(0,0,0,0.9)]">
            Áo Polo Teelab, Polo form rộng vai ca chuong
          </a>
          <div className="mt-[2px] ">
            <span className="text-[14px] line-through text-[rgba(0,0,0,0.4)]">
              150.000đ
            </span>
            <span className="text-[16px] ml-[10px] text-green-500">
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
            <p className="text-[rgba(0,0,0,0.5)] mt-[4px] text-[14px]">
              Hà Nội
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Item;
