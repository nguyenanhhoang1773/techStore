import { Item } from "../Components";
import Slider from "../Components/Slider";
import { dbSale, dbProduct, dbVku } from "../api";
function HomePage() {
  return (
    <div>
      <div className="px-[20px] pb-[20px] shadow-lg  bg-green-300 border-[4px] border-white rounded-3xl">
        <div className="flex justify-center">
          <div className="relative inline-block w-[60px] h-[44px] mr-[30px] bg-green-500">
            <div className="absolute top-[100%] left-0 border-[30px]  border-t-0 border-green-500 border-b-transparent "></div>
          </div>
          <h3 className="inline-block text-[36px] text-center py-[10px] font-[700] text-shadow text-[rgba(0,0,0,0.6)] text-white tracking-wider italic decoration-[rgba(0,0,0,0.01)]">
            Siêu sale tháng 2
          </h3>
          <div className="relative inline-block w-[60px] h-[44px] ml-[30px] bg-green-500">
            <div className="absolute top-[100%] left-0 border-[30px]  border-t-0 border-green-500 border-b-transparent "></div>
          </div>
        </div>
        <Slider scroll>
          {dbSale.map(({ id, title, src, sale, prevPrice, nextPrice }) => (
            <Item
              id={id}
              key={id}
              title={title}
              src={src}
              sale={sale}
              prevPrice={prevPrice}
              nextPrice={nextPrice}
            />
          ))}
        </Slider>
      </div>
      <div className="mt-[12px]">
        <h4 className="mt-[12px] p-[10px] text-[22px] font-[600]  text-[rgba(0,0,0,0.8)]">
          SẢN PHẨM NỔI BẬT
        </h4>
        <Slider scroll>
          {dbProduct.map(({ id, title, src, sale, prevPrice, nextPrice }) => (
            <Item
              id={id}
              key={id}
              title={title}
              src={src}
              sale={sale}
              prevPrice={prevPrice}
              nextPrice={nextPrice}
            />
          ))}
        </Slider>
      </div>
      <div className="mt-[12px]">
        <h4 className="mt-[12px] p-[10px] text-[22px] font-[600] text-[rgba(0,0,0,0.8)]">
          SẢN PHẨM ƯU ĐÃI DÀNH RIÊNG CHO SINH VIÊN VKU!
        </h4>
        <Slider>
          {dbVku.map(({ id, title, src, sale, prevPrice, nextPrice }) => (
            <Item
              id={id}
              key={id}
              title={title}
              src={src}
              sale={sale}
              prevPrice={prevPrice}
              nextPrice={nextPrice}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default HomePage;
