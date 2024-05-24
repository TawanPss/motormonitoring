import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect, useContext, createContext } from "react";
import Login from "./LoginAndReg/Login.jsx";
import Register from "./LoginAndReg/Register.jsx";
import "./index.css";
import Landing from "./Page/LandingPage/Landing.jsx";
import AboutUs from "./Page/AboutUsPage/AboutUs.jsx";
import Contact from "./Page/ContactPage/Contact.jsx";
import Home from "./Page/Home/Home.jsx";
import Record from "./Page/RecordPage/Record.jsx";
import Feature from "./Page/Feature/Feature.jsx";
import Myaccount from "./Page/MyaccountPage/Myaccount.jsx";
import NewMotor from "./Page/Admin_NewMotorPage/NewMotorPage.jsx";
import CreateMotor from "./Page/CRUD/Create.jsx";
import ShowMotor from "./Page/CRUD/Showmotor.jsx";
import ShowSingle from "./Page/CRUD/ShowSingle.jsx";
import CustomerList from "./Page/Admin_Customer/CustomerList.jsx";
import CustomerMotorList from "./Page/Admin_MotorList/CustomerMotorList.jsx";
import PrivateRoute from "./LoginAndReg/PrivateRoute.jsx";
import ShowSingleMockup from "./Page/CRUD/ShowSingleMockup.jsx";
import MotorRecord from "./Page/RecordPage/MotorRecord.jsx";
import AdminAllMotors from "./Page/AllmotorPage/AdminAllMotors.jsx";
import { getCookie } from "./component/APIs/Cookie.jsx";

export const UserContext = createContext();

function App() {
  const [isAuthen, setIsAuthen] = useState(false);
  const [userRole, setRole] = useState(null);
  const isAuthUrl = `api/users/get/user_data`;
  
  useEffect(() => {
    const checkAuth = async () => {
      const token = getCookie('token');
      const reqAuth = {
        method: 'POST',
        headers:{
          'Authorization': `Bearer ${token}`
        }
      };
      if(token){
        console.log(token);
        try {
          const response = await fetch(isAuthUrl, reqAuth);
          if (response.ok) {
            const msg = await response.json();
            setRole(msg.role);
            // setIsAuthen(true);
          }
          else{
            setRole(null);
            // setIsAuthen(false);
          }
        } catch (err) {
          console.error(err);
        }
      }
    };

    checkAuth();
  }, []);


  return (
    <>
      <BrowserRouter>
        <UserContext.Provider value={userRole}>
          <Routes>
            <Route path="/" element={<Landing />}></Route>
            <Route path="/about-us" element={<AboutUs />}></Route>
            <Route path="/contact-us" element={<Contact />}></Route>
            <Route path="/sign-in" element={<Login />}/>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/record" element={<Record />}></Route>
            <Route path="/record/:motorId" element={<MotorRecord />} />
            <Route path="/feature" element={<Feature />}></Route>
            <Route path="/profile" element={<Myaccount />}></Route>
            <Route path="/motor-" element={<CreateMotor />}></Route>
            <Route path="/show-motor" element={<ShowMotor />}></Route>
            <Route path="/show-motor/:id" element={<ShowSingle />} />
            <Route path="/show-motor-mockup" element={<ShowSingleMockup/>}></Route>
            <Route path="/all-motors" element={
              <PrivateRoute role={"customer"}>
                  <ShowMotor />
                </PrivateRoute>
              }
            />
            <Route path="/admin-all-motors" element={
              <PrivateRoute userRole={userRole} role={"admin"}>
                <AdminAllMotors />
              </PrivateRoute>
              }
            />
            <Route path="/admin-new-motor" element={
              <PrivateRoute userRole={userRole} role={"admin"}>
                <NewMotor />
              </PrivateRoute>
              }
            />
            <Route path="/admin-customer-list" element={<CustomerList/>}></Route>
            <Route path="/admin-customer-motor-list" element={<CustomerMotorList/>}></Route>
            <Route path="*" element={<p>Error 404 Not Found ...</p>} />
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
