import React, { useEffect, useState } from "react";
import { getRecords } from "../../component/APIs/ApiComponent";
import { useParams } from "react-router-dom";
import NavigationBar from "../../component/NavigationBar/NavigationBar";
import "./MotorRecord.css";

export default function MotorRecord() {
  const [motorRecords, setMotorRecords] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { motorId } = useParams();

  useEffect(() => {
    getMotorRecords();
  }, []);

  const getMotorRecords = async() => {
    setIsLoading(true);
    try{
        const data = await getRecords(motorId);
        setMotorRecords(data.data);
        setIsLoading(false);
    }
    catch(err){
        console.error("API Error:", err);
        setError("An error occurred while fetching data");
        setIsLoading(false);
    }
  };

  const downloadCSV = (index) => {
    const record = motorRecords[index];
    const csvData = convertToCSV(record);
    const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.setAttribute("download", `motor_${motorId}_record_${index + 1}.csv`);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const convertToCSV = (record) => {
    const headers = ["temperature", "vibration", "voltage", "current"];
    const rows = [];

    for (let i = 0; i < record.temperature.length; i++) {
      const row = [
        record.temperature[i],
        record.vibration[i],
        record.voltage[i],
        record.current[i],
      ];
      rows.push(row.join(","));
    }

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
      <div className="motor-record-container">
        <h1 className="motor-record-header">Motor Record - {motorId}</h1>
        <div className="motor-record-list-container">
          <div className="motor-record-table-header">
            <div className="sub-motor-record-box">
              <p>File Name</p>
            </div>
            <div className="sub-motor-record-box">
              <p>Timestamp</p>
            </div>
            <div className="sub-motor-record-box"></div>
          </div>
          {motorRecords?.map((record, index) => (
            <div className="motor-record-box" key={record.timestamp}>
              <div className="sub-motor-record-box">
                <p>{`motor_${motorId}_record_${index + 1}.csv`}</p>
              </div>
              <div className="sub-motor-record-box">
                <p>{record.timestamp}</p>
              </div>
              <div className="sub-motor-record-box">
                <button
                  className="Download-button"
                  onClick={() => downloadCSV(index)}
                >
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}