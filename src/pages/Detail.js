import { StartIcon, CartIcon } from "../assets/icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoxOpen,
  faMobile,
  faShield,
} from "@fortawesome/free-solid-svg-icons";
import { Item } from "../Components";
import Slider from "../Components/Slider";
function DetailPage() {
  return (
    <div>
      <div className="px-[10px]">
        <div className="flex justify-center rounded-lg bg-white text-[rgba(0,0,0,0.7)]">
          <div>
            <img
              className="rounded-sm"
              src="https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/_/0/_0004_a8x5s21121110pcah70.jpg"
            />
            <div></div>
          </div>
          <div className="px-[20px] ml-[40px] py-[30px]">
            <h3>
              Áo Polo Unisex Teelab,Polo form rộng unisex Teelab localbrand
            </h3>
            <div className="flex mt-[12px] items-center">
              <span className=" mr-[4px]">4.5</span>
              <span className="h-[30px]">
                <StartIcon deltail />
                <StartIcon deltail />
                <StartIcon deltail />
              </span>
              <span className="ml-[18px]">68</span>
              <span className="ml-[6px] text--500 ">Đánh Giá</span>
              <span className="ml-[18px]">1,3k</span>
              <span className="ml-[6px] text-[var(--color-primary)] ">
                Đã Bán
              </span>
            </div>
            <div className="flex mt-[10px] items-center">
              <span className="text-primary line-through">180.000đ</span>
              <span className="text-[var(--color-primary)] text-[24px] ml-[10px]">
                125.000đ
              </span>
              <div className="bg-[var(--color-primary)]  text-white inline-block  ml-[12px] px-[4px] rounded-sm">
                31% Giảm
              </div>
            </div>
            <div className="mt-[10px]">
              <span className="text-primary">Mã Giảm Giá</span>
              <span className="ml-[14px]  bg-slate-200 px-[6px] py-[2px] text-[var(--color-primary)]">
                10% GIẢM
              </span>
            </div>
            <div className="mt-[10px]">
              <span className="text-primary">Bảo Hiểm</span>
              <span className="ml-[14px]">Bảo hiểm Công nghệ</span>
              <span className="ml-[4px] p-[4px] bg-[var(--color-primary)] rounded-t-xl rounded-br-xl">
                Mới
              </span>
            </div>
            <div className="mt-[10px]">
              <span className="text-primary">Vận chuyển</span>
              <div className="inline-block ml-[16px]">
                <img
                  className="inline-block"
                  src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/74f3e9ac01da8565c3baead996ed6e2a.png"
                />
                <span className="ml-[4px]">Miễn phí vận chuyển</span>
              </div>
            </div>
            <div className="mt-[20px]">
              <div className="inline-block hover:opacity-80 hover:cursor-pointer bg-green-100 px-[12px] py-[10px] text-center w-[220px] border border-[var(--color-primary)] text-[var(--color-primary)] rounded-sm">
                <CartIcon />
                <span className="ml-[8px]">Thêm Vào Giỏ Hàng</span>
              </div>
              <div className="inline-block hover:cursor-pointer hover:opacity-80 w-[100px] ml-[12px] bg-[var(--color-primary)] rounded-sm text-white p-[12px]">
                Mua Ngay
              </div>
            </div>
          </div>
          <div className="ml-[20px] p-[20px]">
            <div className=" w-[400px] h-full border-[2px] rounded-xl border-[var(--color-primary)]">
              <div className="bg-[var(--color-primary)] text-[18px] text-white text-center rounded-t-[8px]">
                Thông tin sản phẩm
              </div>
              <div className=" px-[10px] py-[8px] ">
                <div className="flex">
                  <div className="w-[20px] flex justify-center">
                    <FontAwesomeIcon className="" icon={faMobile} />
                  </div>
                  <span className="ml-[10px]">
                    iPhone 13 128GB, cáp USB-C sang Lightning
                  </span>
                </div>
                <div className="mt-[8px] flex">
                  <div className="w-[20px] flex justify-center">
                    <FontAwesomeIcon className="" icon={faBoxOpen} />
                  </div>
                  <span className="ml-[10px]">
                    1 ĐỔI 1 trong 30 ngày nếu có lỗi phần cứng nhà sản xuất. Bảo
                    hành 12 tháng tại trung tâm bảo hành chính hãng Apple : Điện
                    Thoại Vui ASP (Apple Authorized Service Provider)
                  </span>
                </div>
                <div className="mt-[8px] flex">
                  <div className="w-[20px] flex justify-center">
                    <FontAwesomeIcon className="" icon={faShield} />
                  </div>
                  <span className="ml-[10px]">
                    Máy mới 100% , chính hãng Apple Việt Nam. CellphoneS hiện là
                    đại lý bán lẻ uỷ quyền iPhone chính hãng VN/A của Apple Việt
                    Nam
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[26px]">
        <Slider>
          <Item src="https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/_/0/_0004_a8x5s21121110pcah70.jpg" />
          <Item src="https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/p/h/photo_2022-09-28_21-58-51.jpg" />
          <Item src="https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/p/h/photo_2022-09-28_21-58-51.jpg" />
          <Item src="https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/1/4/14_1_9_2_9.jpg" />
          <Item src="https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/p/h/photo_2022-09-28_21-58-51.jpg" />
          <Item src="https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/p/h/photo_2022-09-28_21-58-51.jpg" />
          <Item src="https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/p/h/photo_2022-09-28_21-58-51.jpg" />
          <Item src="https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/p/h/photo_2022-09-28_21-58-51.jpg" />
        </Slider>
      </div>
    </div>
  );
}

export default DetailPage;
