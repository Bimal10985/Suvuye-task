import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import SinglePage from "./Pages/SinglePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/singlepage" element={<SinglePage />} />
      </Routes>
    </>
  );
}

export default App;
