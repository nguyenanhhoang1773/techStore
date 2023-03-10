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
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../Firebase";
function HomePage() {
  const [countWrong, setCountWrong] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [answer, setAnswer] = useState(false);
  const [wrongAnswer, setWrongAnswer] = useState(false);
  const [wrongAccess, setWrongAccess] = useState(false);
  const inputRef = useRef();
  const cotheRef = useRef();
  const henxuiRef = useRef();
  const khongRef = useRef();
  useEffect(() => {}, [countWrong]);
  const handleShowModal = () => {
    setShowModal(true);
  };
  const handleHideModal = () => {
    setShowModal(false);
    setAnswer(false);
    setWrongAnswer(false);
  };
  useEffect(() => {
    const answerLocalStorage = localStorage.getItem("answer");
    // localStorage.removeItem("answer");
    if (answerLocalStorage) {
      setWrongAccess(true);
    }
  }, []);
  const handleGive = () => {
    let answer = "Chua tra loi";
    if (cotheRef.current.checked) {
      answer = cotheRef.current.value;
    }
    if (henxuiRef.current.checked) {
      answer = henxuiRef.current.value;
    }
    if (khongRef.current.checked) {
      answer = khongRef.current.value;
    }
    const pushDB = async () => {
      try {
        const docRef = await addDoc(collection(db, "users"), {
          answer: answer,
          time: serverTimestamp(),
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    };
    pushDB();
    setShowModal(false);
    setAnswer(false);
    setWrongAnswer(false);
  };
  const handleSubmit = () => {
    if (inputRef.current.value.trim() == 25) {
      const pushDB = async () => {
        try {
          const docRef = await addDoc(collection(db, "users"), {
            answer: true,
            time: serverTimestamp(),
          });
          console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      };
      localStorage.removeItem("answer");
      setCountWrong(-99);
      setWrongAnswer(false);
      setAnswer(true);
      pushDB();
    } else {
      const pushDB = async () => {
        try {
          const docRef = await addDoc(collection(db, "users"), {
            answer: false,
            time: serverTimestamp(),
          });
          console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      };

      const answerLocalStorage = localStorage.getItem("answer");
      if (answerLocalStorage) {
        setWrongAccess(true);
      }
      setCountWrong((prev) => ++prev);
      setWrongAnswer(true);
      pushDB();
    }
  };
  useEffect(() => {
    if (countWrong >= 2) {
      localStorage.setItem("answer", "false");
    }
  }, [countWrong]);

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
              className={`absolute ${
                answer ? "bg-green-500 h-[400px]" : "bg-green-400 h-[300px]"
              } rounded-md w-[600px]   border-white border-[4px] `}
            >
              <FontAwesomeIcon
                className={`text-[80px] absolute 
                ${answer ? "top-[-21%]" : "top-[-28%]"}
                 right-[50%] translate-x-[50%]`}
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
                  className="text-[64px] absolute text-green-400 top-[-25%] right-[50%] translate-x-[50%]"
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
                  <div className="relative inline-block w-[60px] h-[44px] mr-[30px] bg-green-300">
                    <div className="absolute top-[100%] left-0 border-[30px]  border-t-0 border-green-300 border-b-transparent "></div>
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
                  <div className="relative inline-block w-[60px] h-[44px] ml-[30px] bg-green-300">
                    <div className="absolute top-[100%] left-0 border-[30px]  border-t-0 border-green-300 border-b-transparent "></div>
                  </div>
                )}
              </div>
              <p className="text-white text-shadow text-center px-[18px] font-[600] text-[26px]">
                {!answer &&
                  !wrongAnswer &&
                  !wrongAccess &&
                  "Nh???p v??o t???ng c???a ng??y sinh + th??ng sinh c???a b???n"}
                {answer &&
                  "Xin l???i l??m phi???n c???u r???i, qu??n h???t nh???ng g?? nh??n th???y h??m tr?????c ??i nha, ch??c c???u 1 ng??y zui z???"}
                {wrongAnswer &&
                  !wrongAccess &&
                  "Xin l???i s???n ph???m n??y kh??ng d??nh cho b???n r???i!"}
                {wrongAccess &&
                  "B???n ???? nh???p h???t s??? l???n cho ph??p. Ch??c b???n 1 ng??y zui =))"}
                {}
              </p>
              {!answer && !wrongAccess && (
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
              {
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
              }
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
              Si??u sale th??ng 2
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
            S???N PH???M N???I B???T
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
            S???N PH???M ??U ????I D??NH RI??NG CHO SINH VI??N VKU!
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
