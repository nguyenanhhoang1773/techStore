import { StartIcon, CartIcon } from "../assets/icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faSpinner,
  faHeart,
  faXmark,
  faHandsHolding,
  faFaceSmileWink,
} from "@fortawesome/free-solid-svg-icons";
import { Item } from "../Components";
import Slider from "../Components/Slider";
import { useParams } from "react-router-dom";
import { db, dbProduct } from "../api";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../features/CartManage";
function DetailPage() {
  const products = useSelector((state) => state.cartManage.products);
  const dispath = useDispatch();
  const { id: idProduct } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [loadingApp, setLoadingApp] = useState(true);
  const [haveProduct, setHaveProduct] = useState(false);
  const handleShowModal = () => {
    setShowModal(true);
  };
  const handleHideModal = () => {
    setShowModal(false);
  };
  useEffect(() => {
    setLoadingApp(true);
    setTimeout(() => {
      setLoadingApp(false);
    }, 300);
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
    const num = products.filter((product) => {
      return product.id == idProduct;
    });
    console.log(products);
    if (num.length > 0) {
      setHaveProduct(true);
      setTimeout(() => {
        setHaveProduct(false);
      }, 1000);
    } else {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 500);
      dispath(addProduct({ ...product }));
    }
  };
  return (
    <div className="">
      {loadingApp && (
        <div className="h-[80vh] flex justify-center items-center ">
          <FontAwesomeIcon
            className="text-[140px] text-green-400 animate-spin "
            icon={faSpinner}
          />
        </div>
      )}
      {!loadingApp && (
        <div>
          {showModal && (
            <div
              onClick={handleHideModal}
              className="fixed z-[99] flex items-center justify-center bg-[rgba(0,0,0,0.6)] top-0 right-0 left-0 bottom-0"
            >
              <div
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className="absolute rounded-md w-[600px] h-[300px] border-white border-[4px] bg-green-500"
              >
                <div
                  onClick={handleHideModal}
                  className="absolute z-[99] top-[10px] hover:opacity-70 hover:cursor-pointer rounded-full right-[10px] flex items-center justify-center w-[28px] h-[28px] bg-[rgba(0,0,0,0.5)]"
                >
                  <FontAwesomeIcon className="" icon={faXmark} />
                </div>
                <div className="flex relative justify-center ">
                  <FontAwesomeIcon
                    className="text-[80px] absolute top-[-95%] right-[50%] translate-x-[50%]"
                    icon={faHandsHolding}
                  />
                  <FontAwesomeIcon
                    className="text-[64px] absolute text-green-400 top-[-115%] right-[50%] translate-x-[50%]"
                    icon={faHeart}
                  />
                  <div className="relative inline-block w-[60px] h-[44px] mr-[30px] bg-green-300">
                    <div className="absolute top-[100%] left-0 border-[30px]  border-t-0 border-green-300 border-b-transparent "></div>
                  </div>
                  <FontAwesomeIcon
                    className="text-[60px] py-[14px]"
                    icon={faFaceSmileWink}
                  />
                  <div className="relative inline-block w-[60px] h-[44px] ml-[30px] bg-green-300">
                    <div className="absolute top-[100%] left-0 border-[30px]  border-t-0 border-green-300 border-b-transparent "></div>
                  </div>
                </div>
                <p className="text-white text-shadow text-center font-[600] text-[26px]">
                  ĐƠN HÀNG SẼ ĐƯỢC GIAO ĐẾN BẠN TRONG THỜI GIAN GẦN NHẤT!
                </p>
                <p className="text-green-100 text-shadow text-center font-[600] text-[16px] mt-[20px]">
                  XIN CẢM ƠN BẠN ĐÃ TIN TƯỞNG VÀ ĐẶT HÀNG TẠI TECHSTORE.
                </p>
                <div className="flex justify-center mt-[10px]">
                  <FontAwesomeIcon
                    className="text-[30px] text-green-300 p-[10px] "
                    icon={faHeart}
                  />
                  <FontAwesomeIcon
                    className="text-[30px] p-[10px] "
                    icon={faHeart}
                  />
                  <FontAwesomeIcon
                    className="text-[30px] text-green-300 p-[10px] "
                    icon={faHeart}
                  />
                  <FontAwesomeIcon
                    className="text-[30px] p-[10px] "
                    icon={faHeart}
                  />
                  <FontAwesomeIcon
                    className="text-[30px] text-green-300 p-[10px] "
                    icon={faHeart}
                  />
                </div>
              </div>
            </div>
          )}
          {haveProduct && (
            <div className="fixed flex justify-center items-center z-[99] top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.5)]">
              <div className="bg-green-400 px-[12px] py-[6px] rounded-2xl text-white font-[600] text-shadow text-[26px]">
                Sản phẩm đã ở trong giỏ hàng!
              </div>
            </div>
          )}
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
                    className="inline-block h-[48px] hover:opacity-70 hover:cursor-pointer bg-green-100 px-[12px] py-[10px] text-center w-[220px] border border-[var(--color-primary)] text-[var(--color-primary)] rounded-sm"
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
                  <div
                    onClick={handleShowModal}
                    className="inline-block hover:cursor-pointer hover:opacity-80 w-[100px] ml-[12px] bg-[var(--color-primary)] rounded-sm text-white p-[12px]"
                  >
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
              {dbProduct.map(
                ({ id, title, src, sale, prevPrice, nextPrice }) => (
                  <Item
                    id={id}
                    key={id}
                    title={title}
                    src={src}
                    sale={sale}
                    prevPrice={prevPrice}
                    nextPrice={nextPrice}
                  />
                )
              )}
            </Slider>
          </div>
        </div>
      )}
    </div>
  );
}

export default DetailPage;
