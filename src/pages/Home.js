import { Item } from "../Components";
import Slider from "../Components/Slider";
import { useMediaQuery } from "react-responsive";
import { dbSale, dbProduct, dbVku } from "../api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGift,
  faGifts,
  faHeart,
  faXmark,
  faHandsHolding,
  faFaceSmileWink,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import "./lo.css";
import { useEffect, useRef, useState } from "react";
function HomePage() {
  const [showModal, setShowModal] = useState(false);
  const [answer, setAnswer] = useState(false);
  const [wrongAnswer, setWrongAnswer] = useState(false);
  const inputRef = useRef();
  const handleShowModal = () => {
    setShowModal(true);
  };
  const handleHideModal = () => {
    setShowModal(false);
    setAnswer(false);
    setWrongAnswer(false);
  };
  const handleSubmit = () => {
    if (inputRef.current.value == 25) {
      setWrongAnswer(false);
      setAnswer(true);
    } else {
      setWrongAnswer(true);
    }
  };
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [showModal]);
  return (
    <div>
      <>
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
              <FontAwesomeIcon
                className="text-[80px] absolute top-[-28%] right-[50%] translate-x-[50%]"
                icon={faHandsHolding}
              />
              {!answer && (
                <FontAwesomeIcon
                  className="text-[64px] absolute text-green-400 top-[-33%] right-[50%] translate-x-[50%]"
                  icon={faHeart}
                />
              )}
              {answer && (
                <FontAwesomeIcon
                  className="text-[64px] absolute text-[#f58181] top-[-33%] right-[50%] translate-x-[50%]"
                  icon={faHeart}
                />
              )}

              <div
                onClick={handleHideModal}
                className="absolute z-[99] top-[10px] hover:opacity-70 hover:cursor-pointer rounded-full right-[10px] flex items-center justify-center w-[28px] h-[28px] bg-[rgba(0,0,0,0.5)]"
              >
                <FontAwesomeIcon className="" icon={faXmark} />
              </div>

              <div className="flex relative justify-center ">
                {!answer && (
                  <div className="relative inline-block w-[60px] h-[44px] mr-[30px] bg-green-300">
                    <div className="absolute top-[100%] left-0 border-[30px]  border-t-0 border-green-300 border-b-transparent "></div>
                  </div>
                )}
                {answer && (
                  <div className="relative inline-block w-[60px] h-[44px] mr-[30px] bg-[#f58181]">
                    <div className="absolute top-[100%] left-0 border-[30px]  border-t-0 border-[#f58181] border-b-transparent "></div>
                  </div>
                )}
                {!answer && (
                  <FontAwesomeIcon
                    className="text-[60px] py-[14px]"
                    icon={faFaceSmileWink}
                  />
                )}
                {answer && (
                  <div className="mt-[20px]">
                    <div id="heart"></div>
                  </div>
                )}
                {!answer && (
                  <div className="relative inline-block w-[60px] h-[44px] ml-[30px] bg-green-300">
                    <div className="absolute top-[100%] left-0 border-[30px]  border-t-0 border-green-300 border-b-transparent "></div>
                  </div>
                )}
                {answer && (
                  <div className="relative inline-block w-[60px] h-[44px] ml-[30px] bg-[#f58181]">
                    <div className="absolute top-[100%] left-0 border-[30px]  border-t-0 border-[#f58181] border-b-transparent "></div>
                  </div>
                )}
              </div>
              <p className="text-white text-shadow text-center px-[18px] font-[600] text-[26px]">
                {!answer &&
                  !wrongAnswer &&
                  "Nhập vào tổng của ngày sinh + tháng sinh của bạn"}
                {answer && "Cậu đây rồi!! Chúc cậu 1 ngày siêu zui zẻ nha"}
                {wrongAnswer && "Xin lỗi sản phẩm này không dành cho bạn rồi!"}
              </p>
              {!answer && (
                <div className="flex mt-[14px] justify-center">
                  <div className="flex items-center">
                    <input
                      onKeyUp={(e) => {
                        if (e.keyCode === 13) {
                          handleSubmit();
                        }
                      }}
                      ref={inputRef}
                      className="text-black w-[400px] h-[40px] text-shadow text-center font-[600] text-[20px]"
                    ></input>
                  </div>
                  <span
                    onClick={handleSubmit}
                    className="ml-[10px] hover:cursor-pointer  p-[10px] "
                  >
                    <FontAwesomeIcon
                      className="text-[30px]"
                      icon={faArrowRight}
                    />
                  </span>
                </div>
              )}
              {!answer && (
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
              )}
              {answer && (
                <>
                  <div className="flex justify-center mt-[10px]">
                    <FontAwesomeIcon
                      className="text-[30px] text-[#f58181] p-[10px] "
                      icon={faHeart}
                    />
                    <FontAwesomeIcon
                      className="text-[30px] p-[10px] "
                      icon={faHeart}
                    />
                    <FontAwesomeIcon
                      className="text-[30px] text-[#f58181] p-[10px] "
                      icon={faHeart}
                    />
                    <FontAwesomeIcon
                      className="text-[30px] p-[10px] "
                      icon={faHeart}
                    />
                    <FontAwesomeIcon
                      className="text-[30px] text-[#f58181] p-[10px] "
                      icon={faHeart}
                    />
                  </div>
                  <p className="text-white text-shadow text-center px-[18px] font-[500] text-[24px]">
                    Thứ nhỏ bé này là dành cho cậu đó ^ ^
                  </p>
                </>
              )}
            </div>
          </div>
        )}
        <div className="px-[20px] pb-[20px] shadow-lg  bg-green-300 border-[4px] border-white rounded-3xl">
          <div className="flex justify-center">
            <FontAwesomeIcon
              className="text-[60px] mr-[60px] pt-[10px] "
              icon={faGift}
            />
            <div className="relative inline-block w-[60px] h-[44px] mr-[30px] bg-green-400">
              <div className="absolute top-[100%] left-0 border-[30px]  border-t-0 border-green-400 border-b-transparent "></div>
            </div>
            <h3 className="inline-block text-[36px] text-center py-[10px] font-[700] text-shadow text-[rgba(0,0,0,0.9)]  tracking-wider italic decoration-[rgba(0,0,0,0.01)]">
              Siêu sale tháng 2
            </h3>
            <div className="relative inline-block w-[60px] h-[44px] ml-[30px] bg-green-400">
              <div className="absolute top-[100%] left-0 border-[30px]  border-t-0 border-green-400 border-b-transparent "></div>
            </div>
            <FontAwesomeIcon
              className="text-[60px] ml-[60px] pt-[10px] "
              icon={faGifts}
            />
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
                onClick={handleShowModal}
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
      </>
    </div>
  );
}

export default HomePage;
