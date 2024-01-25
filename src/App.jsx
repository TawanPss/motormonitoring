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
import Landing from "./component/Landing.jsx";
import AboutUs from "./component/AboutUs.jsx";
import Contact from "./component/Contact.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/landing" element={<Landing />}></Route>
        <Route path="/about-us" element={<AboutUs />}></Route>
        <Route path="/contact-us" element={<Contact />}></Route>
        </Routes>
        <Routes>
          <Route path="/all-motors" element={<AllMotors />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/factory" element={<Factory />}></Route>
          <Route path="/multi-view" element={<Mutiview />}></Route>
          <Route path="/record" element={<Record />}></Route>
          <Route path="/favorite" element={<FavMotors />}></Route>
        </Routes>
        
      </BrowserRouter>
    </>
  );
}

export default App;
