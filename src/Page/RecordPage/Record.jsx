import React, { useEffect, useState } from "react";
import axios from "axios";
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

  const downloadCSV = (motorId) => {
    const motor = motorRecords.find((m) => m.motor_id === motorId);
    if (motor && motor.motor_details && motor.motor_details.sensors) {
      const csvData = convertToCSV(motor.motor_details.sensors);
      const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.setAttribute("download", `${motorId}_data.csv`);
      link.style.visibility = "hidden";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const convertToCSV = (data) => {
    const headers = Object.keys(data[0]);
    const rows = data.map((obj) => Object.values(obj).join(","));
    return [headers.join(","), ...rows].join("\n");
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
              <p>File Name</p>
            </div>
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
                <p>{`${motor.motor_id}_data.csv`}</p>
              </div>
              <div className="sub-record-box">
                <p>{motor.motor_id}</p>
              </div>
              <div className="sub-record-box">
                <p>{new Date().toLocaleDateString()}</p>
              </div>
              <div className="sub-record-box">
                <button
                  className="Download-button"
                  onClick={() => downloadCSV(motor.motor_id)}
                >
                  Download
                </button>
                <button className="Delete-button">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}