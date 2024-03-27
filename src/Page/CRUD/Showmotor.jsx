import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
        setMotors(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
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
    <div>
      <h1>All Motors</h1>
      {motors.map((motor) => (
        <div key={motor.motor_id}>
          <Link to={`/show-motor/${motor.motor_id}`}>{motor.motor_id}</Link>
        </div>
      ))}
    </div>
  );
};

export default ShowMotor;