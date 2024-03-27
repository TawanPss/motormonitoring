import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const ShowSingle = () => {
  const [motor, setMotor] = useState(null);
  const { motor_id } = useParams();

  useEffect(() => {
    getMotor();
  }, []);

  const getMotor = () => {
    axios
      .get('http://localhost:3000/motors')
      .then((res) => {
        const motor = res.data.find(m => m.motor_id === motor_id);
        setMotor(motor);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (!motor) {
    return <p>No motor found</p>;
  }

  return (
    <div className="user mt-5">
      <h1>Motor Details</h1>
      <p>Motor ID: {motor.motor_id}</p>
      <h2>Sensors:</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Temperature</th>
            <th>Vibration</th>
            <th>Voltage</th>
            <th>Current</th>
            <th>RPM</th>
            <th>Timestamp</th>
            <th>ID</th>
          </tr>
        </thead>
        <tbody>
          {motor.sensors.map((sensor, index) => (
            <tr key={index}>
              <td>{sensor.temperature}</td>
              <td>{sensor.vibration}</td>
              <td>{sensor.voltage}</td>
              <td>{sensor.current}</td>
              <td>{sensor.rpm}</td>
              <td>{sensor.timestamp}</td>
              <td>{sensor.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowSingle;