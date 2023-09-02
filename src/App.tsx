import Navbar from "./scenes/navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./scenes/homePage";
import Question from "./scenes/questionPage";
import Result from "./scenes/resultsPage";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/question/:questionId" element={<Question />}></Route>
            <Route path="/result" element={<Result />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
