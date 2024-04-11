import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import NavigationBar from "../../component/NavigationBar/NavigationBar";
import "./Record.css";

export default function Record() {
  const [motorRecords, setMotorRecords] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const userId = "2f9a7c11-a2b7-47ad-8f66-6a32b8acc0c5"; // Set the desired user ID

  useEffect(() => {
    getMotorRecords();
  }, []);

  const getMotorRecords = () => {
    setIsLoading(true);
    axios
      .get("http://localhost:3000/user")
      .then((res) => {
        console.log("API Response:", res.data);
        if (res.data && res.data.user_id === userId && res.data.motor_owned) {
          setMotorRecords(res.data.motor_owned);
        } else {
          setError("User data not found or invalid response");
        }
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("API Error:", err);
        setError("An error occurred while fetching data");
        setIsLoading(false);
      });
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
      <div className="record-container">
        <h1 className="record-Header">Record</h1>
        <div className="record-list-container">
          <div className="record-table-header">
            <div className="sub-record-box">
              <p>Motor ID</p>
            </div>
            <div className="sub-record-box">
              <p>Date</p>
            </div>
            <div className="sub-record-box"></div>
          </div>
          {motorRecords.map((motor) => (
            <div className="record-box" key={motor.motor_id}>
              <div className="sub-record-box">
                <p>{motor.motor_id}</p>
              </div>
              <div className="sub-record-box">
                <p>{new Date().toLocaleDateString()}</p>
              </div>
              <div className="sub-record-box">
                <Link to={`/record/${motor.motor_id}`}>
                  <button className="View-button">View</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}