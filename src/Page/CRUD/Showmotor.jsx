import React, { useEffect, useState } from "react";
import { Link, redirect } from "react-router-dom";
import { getCookie } from "../../component/APIs/Cookie";
import NavigationBar from "../../component/NavigationBar/NavigationBar";
import Popup from 'reactjs-popup';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setUser, setMotorDataById } from "../../slicers/userSlice";
import { getUserData, userAddMotor } from "../../component/APIs/UserAPIs";
import Swal from "sweetalert2";

const ShowMotor = () => {
  // const [user, setUser] = useState(null);
  const user = useSelector((state) => state.user.user)
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [motor_id, setMotorID] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    dispatch(getUserData()).unwrap()
    .then((data) => {
      setIsLoading(false);
    })
    .catch((err) => {
      setIsLoading(false)
      Swal.fire({
        title: 'Authorization Failed!',
        text: 'Please sign-in again.',
        icon: "error",
        confirmButtonText: 'Okay'
      });
      navigate('/sign-in')
    })
    // getUser();
  }, []);
  
  const addMotor = async() => {
    dispatch(userAddMotor({"motor_id": motor_id})).unwrap()
    .then((data) => {
      console.log(data);
      dispatch(setUser(data.user))
      redirect('/all-motors')
      Swal.fire({
        title: 'Adding Motor Success!',
        text: 'New motor added.',
        icon: "success",
        confirmButtonText: 'OK'
      });
    })
    .catch((err) => {
      Swal.fire({
        title: 'Adding Motor Failed!',
        text: 'Please try again later.',
        icon: "error",
        confirmButtonText: 'Okay'
      });
    })
  }

  const isMotorActive = (motor) => {
    // const latestSensorReading = motor.motor_details.sensors[motor.motor_details.sensors.length - 1];
    // const currentTime = new Date();
    // const sensorReadingTime = new Date(latestSensorReading.timestamp);
    // const timeDifference = currentTime - sensorReadingTime;
    // const oneHourInMilliseconds = 60 * 60 * 1000; // 1 hour in milliseconds

    // return timeDifference < oneHourInMilliseconds;
    return motor != null ? true : false;
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!user) {
    return <p>No user data available.</p>;
  }

  return (
    <>
      <NavigationBar />
      <div className="all-motors-container">
        <h1 className="AllMotor-header">All Motors</h1>
        <div className="motor-list-container">
          <div className="table-header">
            <div className="sub-motor-box">
              <p>Motor Name</p>
            </div>
            <div className="sub-motor-box">
              <p>Motor ID</p>
            </div>
            <div className="sub-motor-box">
              <p>Department</p>
            </div>
            <div className="sub-motor-box">
              <p>Status</p>
            </div>
            <Popup
              trigger={<button className="Add-New-Motor-button">Add New Motor</button>}
              modal
              nested
            >
              {close => (
                <>
                  <div className='modal-overlay' onClick={close}></div>
                  <div className='modal'>
                    <div className="modal-header-box">
                      <p>Enter Motor ID</p>
                      <button onClick={() => close()} className="Close-button">X</button>
                    </div>
                    <div className='modal-content'>
                      <input name="Motor-ID" id="Motor-ID" type="Text" placeholder="Motor ID" className="motorID-input" value={motor_id} onChange={(e) => setMotorID(e.target.value)}></input>
                      <button className="modal-submit-button" onClick={addMotor}>Add New Motor</button>
                    </div>
                  </div>
                </>
              )}
            </Popup>
          </div>
          {user.motor_owned.map((motor) => (
            <div key={motor.motor_id} className="motor-box">
              <div className="sub-motor-box">
                <p>{motor.motor_id}</p>
              </div>
              <div className="sub-motor-box">
                <p>{motor.motor_id}</p>
              </div>
              <div className="sub-motor-box">
                <p>Production</p>
              </div>
              <div className="sub-motor-box">
                <p>{isMotorActive(motor) ? 'Active' : 'Inactive'}</p>
              </div>
              <button className="More-Detail-button" type="submit">
                <Link to={`/show-motor/${motor.motor_id}`} className="textDecNone">More Detail</Link>
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ShowMotor;