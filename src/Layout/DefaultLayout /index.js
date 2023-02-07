import { Header } from "../Components";
import Container from "../Components/Container";
function DefaultLayout() {
  return (
    <div className="bg-slate-400  min-h-[1000px]">
      <Header />
      <Container />
    </div>
  );
}

export default DefaultLayout;
