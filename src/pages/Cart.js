import {
  faBoxOpen,
  faCartShopping,
  faFaceSadCry,
  faFaceSmileWink,
  faHandsHolding,
  faHeart,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CartItem from "../Components/CartItem";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import router from "../router";
import { Link } from "react-router-dom";
import { clearProducts } from "../features/CartManage";
import { useMediaQuery } from "react-responsive";

function CartPage() {
  const isBigScreen = useMediaQuery({ minWidth: 1774 });
  const dispath = useDispatch();
  const [totalPrice, setTotalPrice] = useState("");
  const [showModal, setShowModal] = useState(false);
  const products = useSelector((state) => state.cartManage.products);
  useEffect(() => {
    console.log(products);
    let total = 0;
    products.forEach((product) => {
      total += Number(product.nextPrice.replace(".000", "").replace(".", ""));
    });
    total = String(total);
    if (Number(total.slice(0, total.length - 3)) !== 0) {
      total = total.slice(0, total.length - 3) + "." + total.slice(-3) + ".000";
      setTotalPrice(total);
    } else {
      setTotalPrice(0);
    }
  }, [products]);
  const handleShowModal = () => {
    setShowModal(true);
  };
  const handleHideModal = () => {
    dispath(clearProducts());
    setShowModal(false);
  };
  return (
    <div className="relative min-h-[800px] mt-[50px]">
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
      <div className=" absolute flex mt-[-12px] mt-[-70px]">
        <FontAwesomeIcon
          className="text-green-500 w-[80px] h-[80px]"
          icon={faCartShopping}
        />
        <div className="h-[70px] bg-green-500 w-[4px] mx-[20px]"></div>
        <span className="h-[50px] mt-[10px] flex items-center  bg-green-500 rounded-full px-[8px]  text-shadow text-[28px] font-[600]">
          Giỏ hàng của bạn
        </span>
      </div>
      {products.length > 0 && isBigScreen && (
        <div className="mx-[300px] relative px-[20px] pt-[2px] border-t-[2px] rounded-t-xl border-l-[2px] border-r-[2px] border-green-500 min-h-[640px] px-[14px] pb-[130px]">
          <div className="absolute rounded-t-full pt-[16px] pl-[20px] pr-[20px]  bg-green-500 bottom-[100%] left-[50%] translate-x-[-50%]">
            <FontAwesomeIcon className="text-[28px]" icon={faBoxOpen} />
          </div>
          {products.map((product) => (
            <CartItem
              id={product.id}
              title={product.title}
              src={product.src}
              sale={product.sale}
              prevPrice={product.prevPrice}
              nextPrice={product.nextPrice}
              key={product.id}
            />
          ))}
        </div>
      )}
      {products.length > 0 && !isBigScreen && (
        <div className="mx-[180px] relative px-[20px] pt-[2px] border-t-[2px] rounded-t-xl border-l-[2px] border-r-[2px] border-green-500 min-h-[640px] px-[14px] pb-[130px]">
          <div className="absolute rounded-t-full pt-[16px] pl-[20px] pr-[20px]  bg-green-500 bottom-[100%] left-[50%] translate-x-[-50%]">
            <FontAwesomeIcon className="text-[28px]" icon={faBoxOpen} />
          </div>
          {products.map((product) => (
            <CartItem
              id={product.id}
              title={product.title}
              src={product.src}
              sale={product.sale}
              prevPrice={product.prevPrice}
              nextPrice={product.nextPrice}
              key={product.id}
            />
          ))}
        </div>
      )}
      {products.length == 0 && (
        <div className="flex mt-[60px] pt-[64px] items-center flex-col">
          <FontAwesomeIcon
            className="text-green-500 text-[140px]"
            icon={faFaceSadCry}
          />
          <p className="text-[30px] font-[600] mt-[20px] text-green-500">
            Bạn chưa có sản phẩm nào trong giỏ hàng của mình!
          </p>
        </div>
      )}

      <div className="fixed border-t-[4px] border-green-500 shadow-2xl bg-white rounded-lg px-[16px] pb-[10px]  w-[800px] left-[50%] translate-x-[-50%] bottom-0 ">
        <div className="flex justify-between items-center">
          <span className="text-[rgba(0,0,0,0.8)] text-[20px] ">
            Tổng tiền:
          </span>
          <span className="text-green-500 text-[24px] font-[600]">
            {totalPrice ? totalPrice : 0}đ
          </span>
        </div>
        <div
          onClick={handleShowModal}
          className="bg-green-500 mt-[4px] hover:opacity-80 hover:cursor-pointer rounded-md py-[6px] px-[12px] text-[26px] text-shadow text-center font-[600]"
        >
          TIẾN HÀNH ĐẶT HÀNG
        </div>
        <Link
          to={router.Home}
          className="text-green-500 block border-[2px] hover:opacity-80 hover:cursor-pointer font-[600] mt-[10px] rounded-md text-shadow text-[22px] py-[6px] px-[10px] text-center border-green-400"
        >
          CHỌN THÊM SẢN PHẨM KHÁC
        </Link>
      </div>
    </div>
  );
}

export default CartPage;
