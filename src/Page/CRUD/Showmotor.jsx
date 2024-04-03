import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import NavigationBar from "../../component/NavigationBar/NavigationBar";
import Popup from 'reactjs-popup';

const ShowMotor = () => {
  const userApi = "http://localhost:3000/user";
  const userId = "2f9a7c11-a2b7-47ad-8f66-6a32b8acc0c5"; // Set the desired user ID
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = () => {
    setIsLoading(true);
    axios
      .get(userApi)
      .then((res) => {
        console.log("API Response:", res.data);
        if (res.data && res.data.user_id === userId) {
          console.log("User data found:", res.data);
          setUser(res.data);
        } else {
          console.log("User not found or user ID mismatch");
          setError("User not found");
        }
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
        setIsLoading(false);
      });
  };

  const isMotorActive = (motor) => {
    const latestSensorReading = motor.motor_details.sensors[motor.motor_details.sensors.length - 1];
    const currentTime = new Date();
    const sensorReadingTime = new Date(latestSensorReading.timestamp);
    const timeDifference = currentTime - sensorReadingTime;
    const oneHourInMilliseconds = 60 * 60 * 1000; // 1 hour in milliseconds

    return timeDifference < oneHourInMilliseconds;
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
                      <input name="Motor-ID" id="Motor-ID" type="Text" placeholder="Motor ID" className="motorID-input"></input>
                      <button className="modal-submit-button">Add New Motor</button>
                    </div>
                  </div>
                </>
              )}
            </Popup>
          </div>
          {user.motor_owned.map((motor) => (
            <div key={motor.motor_id} className="motor-box">
              <div className="sub-motor-box">
                <p>Motor ID: {motor.motor_id}</p>
              </div>
              <div className="sub-motor-box">
                <p>Sensor ID: {motor.motor_details.sensors[0].id}</p>
              </div>
              <div className="sub-motor-box">
                <p>Production</p>
              </div>
              <div className="sub-motor-box">
                <p>{isMotorActive(motor) ? 'Active' : 'Inactive'}</p>
              </div>
              <button className="More-Detail-button" type="submit">
                <Link to={`/show-motor/${motor.motor_id}`}>More Detail</Link>
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ShowMotor;