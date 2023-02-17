import { Item } from "../Components";
import Slider from "../Components/Slider";
import ScrollBar from "../Components/Scrollbar.tsx";
function HomePage() {
  return (
    <div>
      <div className="px-[20px] pb-[20px]  bg-green-300 rounded-3xl">
        <h3 className="text-[36px] text-center py-[10px] font-[700] text-shadow text-slate-700 tracking-wider italic underline decoration-[rgba(0,0,0,0.01)]">
          Siêu sale tháng 2
        </h3>
        <Slider scroll>
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
      <div className="mt-[40px]">
        <h4 className="mt-[12px] p-[10px] text-[22px] font-[600]  text-green-400">
          ĐIỆN THOẠI NỔI BẬT NHẤT
        </h4>
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

export default HomePage;
