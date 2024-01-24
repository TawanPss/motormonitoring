import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./component/NavigationBar";
import Login from "./LoginAndReg/Login.jsx";
import Register from "./LoginAndReg/Reg.jsx";
import "./index.css";
import AllMotors from "./component/AllMotors.jsx";
import Factory from "./component/Factory.jsx";
import Mutiview from "./component/Mutiview.jsx";
import Record from "./component/Record.jsx";
import FavMotors from "./component/FavMotors.jsx";
import Home from "./component/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AllMotors />}></Route>
        </Routes>
        <Routes>
          <Route path="/all-motors" element={<AllMotors />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/factory" element={<Factory />}></Route>
          <Route path="/multi-view" element={<Mutiview />}></Route>
          <Route path="/record" element={<Record />}></Route>
          <Route path="/favorite" element={<FavMotors />}></Route>
        </Routes>
        <NavigationBar />
      </BrowserRouter>
    </>
  );
}

export default App;
