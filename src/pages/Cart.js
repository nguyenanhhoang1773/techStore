import {
  faCartShopping,
  faFaceSadCry,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CartItem from "../Components/CartItem";
import { useSelector, useDispatch } from "react-redux";
function CartPage() {
  const products = useSelector((state) => state.cartManage.products);
  return (
    <div className="min-h-[800px]">
      <div className="flex  mt-[-12px]">
        <FontAwesomeIcon
          className="text-green-500 w-[80px] h-[80px]"
          icon={faCartShopping}
        />
        <div className="h-[70px] bg-green-500 w-[4px] mx-[20px]"></div>
        <span className="h-[50px] mt-[10px] flex items-center  bg-green-500 rounded-full px-[8px]  text-shadow text-[28px] font-[600]">
          Giỏ hàng của bạn
        </span>
        {products.length > 0 && (
          <div className="ml-[40px] h-[500px] overflow-auto  min-h-[640px] p-[14px] rounded-xl">
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
      </div>
      {products.length == 0 && (
        <div className="flex mt-[60px] items-center flex-col">
          <FontAwesomeIcon
            className="text-green-500 text-[140px]"
            icon={faFaceSadCry}
          />
          <p className="text-[30px] font-[600] mt-[20px] text-green-500">
            Bạn chưa có sản phẩm nào trong giỏ hàng của mình!
          </p>
        </div>
      )}

      <div className="fixed border-t-[4px] border-green-500 shadow-2xl bg-white rounded-lg px-[16px] py-[12px] w-[800px] left-[50%] translate-x-[-50%] bottom-0 ">
        <div className="flex justify-between">
          <span className="text-[rgba(0,0,0,0.8)] text-[20px] ">
            Tổng tiền:
          </span>
          <span className="text-green-500 text-[24px] font-[600]">
            22.440.000đ
          </span>
        </div>
        <div className="bg-green-500 mt-[10px] hover:opacity-80 hover:cursor-pointer rounded-md py-[6px] px-[12px] text-[26px] text-shadow text-center font-[600]">
          TIẾN HÀNH ĐẶT HÀNG
        </div>
        <div className="text-green-500 border-[2px] hover:opacity-80 hover:cursor-pointer font-[600] mt-[10px] rounded-md text-shadow text-[22px] py-[6px] px-[10px] text-center border-green-400">
          CHỌN THÊM SẢN PHẨM KHÁC
        </div>
      </div>
    </div>
  );
}

export default CartPage;
