import { StartIcon, CartIcon } from "../assets/icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { Item } from "../Components";
import Slider from "../Components/Slider";
import { useParams } from "react-router-dom";
import { db, dbProduct } from "../api";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../features/CartManage";
import { animated, useSpring } from "@react-spring/web";
function DetailPage() {
  const [springs, api] = useSpring(() => ({
    from: { x: "-50%", y: -120 },
  }));
  const dispath = useDispatch();
  const { id: idProduct } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    db.forEach(
      ({
        id,
        title,
        src,
        sale,
        prevPrice,
        nextPrice,
        infor1,
        infor2,
        infor3,
      }) => {
        if (idProduct == id) {
          setProduct({
            id,
            title,
            src,
            sale,
            prevPrice,
            nextPrice,
            infor1,
            infor2,
            infor3,
          });
        }
      }
    );
  }, [idProduct]);
  const handleAddToCart = (e) => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      api.start({
        from: {
          x: "-50%",
          y: -120,
          opacity: 0,
        },
        to: {
          x: "-50%",
          y: 0,
          opacity: 1,
        },
      });
    }, 500);
    setTimeout(() => {
      api.start({
        from: {
          opacity: 1,
        },
        to: {
          opacity: 0,
        },
      });
    }, 2000);
    dispath(addProduct({ ...product }));
  };
  return (
    <divv className="relative">
      <animated.div
        className="py-[6px] px-[12px] text-shadow text-[22px] text-center font-[600] rounded-xl bg-green-400 absolute left-[50%] translate-x-2 "
        style={{
          ...springs,
        }}
      >
        Đã thêm vào giỏ hàng!!
      </animated.div>
      <div className="px-[10px]">
        <div className="flex border-r-[8px] shadow-lg border-l-[8px] border-green-400  justify-center rounded-lg bg-white text-[rgba(0,0,0,0.7)]">
          <div>
            <img className="rounded-sm py-[10px]" src={product.src} />
            <div></div>
          </div>
          <div className="px-[20px] ml-[40px] py-[30px]">
            <h3 className="max-w-[500px] text-[20px] font-[600]">
              {product.title}
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
              <span className="text-primary line-through">
                {product.prevPrice}đ
              </span>
              <span className="text-[var(--color-primary)] text-[24px] ml-[10px]">
                {product.nextPrice}đ
              </span>
              <div className="bg-[var(--color-primary)]  text-white inline-block  ml-[12px] px-[4px] rounded-sm">
                {product.sale}% Giảm
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
              <div
                onClick={handleAddToCart}
                className="inline-block h-[44px] hover:opacity-70 hover:cursor-pointer bg-green-100 px-[12px] py-[10px] text-center w-[220px] border border-[var(--color-primary)] text-[var(--color-primary)] rounded-sm"
              >
                {!loading && (
                  <>
                    <CartIcon />
                    <span className="ml-[8px]">Thêm Vào Giỏ Hàng</span>
                  </>
                )}
                {loading && (
                  <FontAwesomeIcon
                    className="text-[20px] animate-spin"
                    icon={faSpinner}
                  />
                )}
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
                    <FontAwesomeIcon className="mt-[3px]" icon={faStar} />
                  </div>
                  <span className="ml-[10px]">{product.infor1}</span>
                </div>
                <div className="mt-[8px] flex">
                  <div className="w-[20px] flex justify-center">
                    <FontAwesomeIcon className="mt-[3px]" icon={faStar} />
                  </div>
                  <span className="ml-[10px]">{product.infor2}</span>
                </div>
                <div className="mt-[8px] flex">
                  <div className="w-[20px] flex justify-center">
                    <FontAwesomeIcon className="mt-[3px]" icon={faStar} />
                  </div>
                  <span className="ml-[10px]">{product.infor3}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[26px]">
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
    </divv>
  );
}

export default DetailPage;
