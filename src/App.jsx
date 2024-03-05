import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./LoginAndReg/Login.jsx";
import Register from "./LoginAndReg/Reg.jsx";
import "./index.css";
import Landing from "./Page/LandingPage/Landing.jsx";
import AboutUs from "./Page/AboutUsPage/AboutUs.jsx";
import Contact from "./Page/ContactPage/Contact.jsx";
import Home from "./Page/Home/Home.jsx";
import Factory from "./Page/FactoryPage/Factory.jsx";
import Mutiview from "./Page/MutiviewPage/Mutiview.jsx";
import Record from "./Page/RecordPage/Record.jsx";
import FavMotors from "./Page/FavMotorPage/FavMotors.jsx";
import AllMotors from "./Page/AllmotorPage/AllMotors.jsx";
import Feature from "./Page/Feature/Feature.jsx";
import NewMotor from "./Page/NewMotorPage/NewMotorPage.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/about-us" element={<AboutUs />}></Route>
          <Route path="/contact-us" element={<Contact />}></Route>
          <Route path="/sign-in" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/all-motors" element={<AllMotors />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/factory" element={<Factory />}></Route>
          <Route path="/multi-view" element={<Mutiview />}></Route>
          <Route path="/record" element={<Record />}></Route>
          <Route path="/favorite" element={<FavMotors />}></Route>
          <Route path="/feature" element={<Feature />}></Route>
          <Route path="/new-motor" element={<NewMotor/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
