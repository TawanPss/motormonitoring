import React, { useEffect, useState } from "react";
import { Link, redirect } from "react-router-dom";
import { getCookie } from "../../component/API/Cookie";
import NavigationBar from "../../component/NavigationBar/NavigationBar";
import Popup from 'reactjs-popup';

const ShowMotor = () => {
  const userApi = `api/users/get/user_data`;
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [motor_id, setMotorID] = useState(null);
  
  useEffect(() => {
    getUser();
  }, []);
  
  const getUser = async () => {
    try{
      setIsLoading(true);
      const token = getCookie('token');
      const reqOption = {
        method: "POST",
        headers:{
          'Authorization': `Bearer ${token}`
        }
      };
      const res = await fetch(userApi,reqOption);
      if(res.ok){
        const data = await res.json()
        setUser(data);
        setIsLoading(false);
      }
    }catch(err){
      setError(err);
      console.log(err);
    }
  }

  const addMotor = async() => {
    const token = getCookie('token');
    const endpoint = `api/users/add/motor`;
    const reqOption = {
      method: "POST",
      headers:{
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        motor_id: motor_id
      })
    };
    try{
      const res = await fetch(endpoint,reqOption);
      if(res.ok){
        const data = await res.json();
        console.log(data);
        redirect('/all-motors')
      }
    }
    catch(err){
      console.log(err)
    }
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