import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import NavigationBar from "../../component/NavigationBar/NavigationBar";
import Popup from 'reactjs-popup';

const ShowMotor = () => {
  const allMotorsApi = "http://localhost:3000/motors";
  const [motors, setMotors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getMotors();
  }, []);

  const getMotors = () => {
    setIsLoading(true);
    axios
      .get(allMotorsApi)
      .then((res) => {
        console.log("API Response:", res.data);
        setMotors(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
        setIsLoading(false);
      });
  };

  const isMotorActive = (motor) => {
    const latestSensorReading = motor.sensors[motor.sensors.length - 1];
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
          {motors.map((motor) => (
            <div key={motor._id} className="motor-box">
              <div className="sub-motor-box">
                <p>{motor.motor_name}</p>
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