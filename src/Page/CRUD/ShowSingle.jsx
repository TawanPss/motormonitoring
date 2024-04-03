import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PieChartComponent,LineChartComponent,BarChartComponent } from "./Graph.jsx";
import './Graph.css';
import NavigationBar from "../../component/NavigationBar/NavigationBar.jsx";

const EditUser = () => {
  const [motorData, setMotorData] = useState([]);
  const { id } = useParams();
  const getMotorApi = "http://localhost:3000/motors"; 

  useEffect(() => {
    getMotorData();
  }, []);

  const getMotorData = () => {
    axios
      .get(getMotorApi)
      .then((response) => {
        console.log(response.data); 
        const motor = response.data.find((motor) => motor.motor_id === id); 
        if (motor) {
          setMotorData(motor.sensors); 
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(motorData, "this is the motor data");
  return (
    <div className="graph-container">
      <NavigationBar />
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Temperature</th>
            <th>Vibration</th>
            <th>Voltage</th>
            <th>Current</th>
            <th>RPM</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {motorData.map((sensor, index) => (
            <tr key={index}>
              <td>{sensor.temperature}</td>
              <td>{sensor.vibration}</td>
              <td>{sensor.voltage}</td>
              <td>{sensor.current}</td>
              <td>{sensor.rpm}</td>
              <td>{sensor.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="dashboard">
  <PieChartComponent className="chart" data={motorData} dataKey="temperature" />
  <PieChartComponent className="chart" data={motorData} dataKey="rpm" />
  <BarChartComponent className="chart" data={motorData} dataKey="current" />
  <BarChartComponent className="chart" data={motorData} dataKey="voltage" />
  <LineChartComponent className="chart vibration" data={motorData} dataKey="vibration" />
</div>
    </div>
  );
};

export default EditUser;
