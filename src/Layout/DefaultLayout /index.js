import { Header } from "../Components";
import Container from "../Components/Container";
import ScrollBar from "../../Components/Scrollbar.tsx";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
function DefaultLayout({ children }) {
  const param = useLocation();
  const startEle = useRef();
  const [height, setHeight] = useState(window.innerHeight);
  useEffect(() => {
    startEle.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }, [param.pathname]);
  useEffect(() => {
    window.onresize = () => {
      setHeight(window.innerHeight);
    };
  }, []);
  return (
    <div>
      <ScrollBar
        heightContent={height}
        heightBar={140}
        colorBar="rgb(74 222 128)"
      >
        <div className="bg-[#9fdfb8a6]">
          <div ref={startEle}></div>
          <Header />
          <Container>{children}</Container>
        </div>
      </ScrollBar>
    </div>
  );
}

export default DefaultLayout;
