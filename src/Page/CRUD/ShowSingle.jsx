import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavigationBar from "../../component/NavigationBar/NavigationBar.jsx";
import { BarChartComponent, LineChartComponent, PieChartComponent } from "./Graph.jsx";
import { getMotorData, getMotorInfo, getLastData } from "../../component/APIs/ApiComponent.jsx";
import { addMotorDataById } from "../../slicers/userSlice.js";
import { useSelector, useDispatch } from "react-redux";
import './Graph.css';
import Swal from "sweetalert2";

const MotorDetail = () => {
  const [motorData, setMotorData] = useState([]);
  const [dataTable, setTable] = useState([]);
  const [motorInfo, setMotorInfo] = useState([]);
  const [error, setError] = useState(null);
  const { id } = useParams(); // Update the parameter name to 'id'
  // const motorData = useSelector(state => state.user.motorData[id]);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("useEffect called");
    async function fetchData(){
      try{
        // const data = await getMotorData(id);
        // setMotorData(data.data);
        const info = await getMotorInfo(id);
        setMotorInfo(info);
        getData();
      }catch(err){
        console.log(err);
      }
    }
    if (id) { // Update the condition to check for 'id'
      fetchData()
    } else {
      console.log("Motor ID not provided");
      setError("Motor ID not provided");
    }
  }, [id]); // Update the dependency to 'id'

  
  async function getData(){
    try{
      const data = await getLastData(id);
      setMotorData((prevData) => {
        const newData = [...prevData, data.data];
        if(newData.length > 10){ // Max length = 10 and FIFO
          const updateData = newData.slice(-10);
          return updateData;
        }
        return newData;
      });
      console.log(data)
    }catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    const reversed = [...motorData].reverse();
    setTable(reversed);
  }, [motorData]);

  useEffect(() => {
    const interval = setInterval(() => {
      getData();
      console.log("getData is working...");
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  
  // const getMotorData = async() => {
    // console.log("getMotorData called");
    // axios
    //   .post(motorApi)
    //   .then((response) => {
    //     console.log("API Response:", response.data);
    //     if (response.data && response.data.motor_owned) {
    //       console.log("Motor Owned Array:", response.data.motor_owned);
    //       const motor = response.data.motor_owned.find((motor) => motor.motor_id === id); // Update the comparison to 'id'
    //       if (motor) {
    //         console.log("Matching Motor:", motor);
    //         if (motor.motor_details && motor.motor_details.sensors) {
    //           console.log("Sensor Data:", motor.motor_details.sensors);
    //           const sensorData = motor.motor_details.sensors;
    //           setMotorData((prevData) => {
    //             console.log("Previous Motor Data:", prevData);
    //             console.log("Updated Motor Data:", sensorData);
    //             return sensorData;
    //           });
    //         } else {
    //           console.log("Motor details or sensors data not found");
    //           setError("Motor details or sensors data not found");
    //         }
    //       } else {
    //         console.log(`Motor with ID ${id} not found`); // Update the log to use 'id'
    //         setError(`Motor with ID ${id} not found`); // Update the error message to use 'id'
    //       }
    //     } else {
    //       console.log("User data not found or invalid response");
    //       setError("User data not found or invalid response");
    //     }
    //   })
    //   .catch((err) => {
    //     console.log("API Error:", err);
    //     setError("An error occurred while fetching data");
    //   });
  // };

  // console.log("Motor Data:", motorData);

  if (error) {
    return <p>Error: {error}</p>;
  }

  // if (motorData.length === 0) {
  //   return <p>No motor data available.</p>;
  // }

  return (
    <div className="graph-container">
      <NavigationBar />
      <div className="graph-page-text-header">
        <h2>Motor Name: {motorInfo.motor_name}</h2> 
        <h2>ID: {motorInfo.motor_id}</h2>
      </div>
      <div className="dashboard">
        <div className="dashboard-row">
          <PieChartComponent className="chart" data={motorData} dataKey="temperature" />
          <LineChartComponent className="chart vibration" data={motorData} dataKey="vibration" />
        </div>
        <div className="dashboard-row">
          <BarChartComponent className="chart" data={motorData} dataKey="current" />
          <BarChartComponent className="chart" data={motorData} dataKey="voltage" />
        </div>
      </div>
      <div className="table-text-header">
        <h1>Data Log</h1>
      </div>
      <table className="monitor-table">
        <thead>
          <tr>
            <th>Temperature</th>
            <th>Vibration</th>
            <th>Voltage</th>
            <th>Current</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {motorData ? motorData.reverse().map((sensor, index) => (
            <tr key={index}>
              <td>{sensor.temperature}</td>
              <td>{sensor.vibration}</td>
              <td>{sensor.voltage}</td>
              <td>{sensor.current}</td>
              <td>{sensor.timestamp}</td>
            </tr>
          )): null}
        </tbody>
      </table>
    </div>
  );
};

export default MotorDetail;