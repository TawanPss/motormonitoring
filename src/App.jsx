import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./LoginAndReg/Login.jsx";
import Register from "./LoginAndReg/Reg.jsx";
import "./index.css";
import Landing from "./Page/LandingPage/Landing.jsx";
import AboutUs from "./Page/AboutUsPage/AboutUs.jsx";
import Contact from "./Page/ContactPage/Contact.jsx";
import Home from "./Page/Home/Home.jsx";
import Record from "./Page/RecordPage/Record.jsx";
import MotorRecord from "./Page/RecordPage/MotorRecord.jsx";
import AllMotors from "./Page/AllmotorPage/AllMotors.jsx";
import Feature from "./Page/Feature/Feature.jsx";
import Myaccount from "./Page/MyaccountPage/Myaccount.jsx";
import NewMotor from "./Page/Admin_NewMotorPage/NewMotorPage.jsx";
import MotorPage from "./Page/MotorPage/MotorPage.jsx";
import CreateMotor from "./Page/CRUD/Create.jsx";
import ShowMotor from "./Page/CRUD/Showmotor.jsx";
import ShowSingle from "./Page/CRUD/ShowSingle.jsx";
import CustomerList from "./Page/Admin_Customer/CustomerList.jsx";
import CustomerMotorList from "./Page/Admin_MotorList/CustomerMotorList.jsx";
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
          <Route path="/record" element={<Record />}></Route>
          <Route path="/record/:motorId" element={<MotorRecord />} />
          <Route path="/feature" element={<Feature />}></Route>
          <Route path="/profile" element={<Myaccount />}></Route>
          <Route path="/admin-new-motor" element={<NewMotor />}></Route>
          <Route path="/motor-" element={<CreateMotor />}></Route>
          <Route path="/show-motor" element={<ShowMotor />}></Route>
          <Route path="/show-motor/:id" element={<ShowSingle />} />
          <Route path="/admin-customer-list" element={<CustomerList/>}></Route>
          <Route path="/admin-customer-motor-list" element={<CustomerMotorList/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
