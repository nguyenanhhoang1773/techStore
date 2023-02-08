import DefaultLayout from "./Layout/DefaultLayout ";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage, DetailPage } from "./pages";
import router from "./router";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path={router.Home}
            element={
              <DefaultLayout>
                <HomePage />
              </DefaultLayout>
            }
          />
          <Route
            path={router.Detail}
            element={
              <DefaultLayout>
                <DetailPage />
              </DefaultLayout>
            }
          />
        </Routes>
        <DefaultLayout />
      </div>
    </Router>
  );
}

export default App;
