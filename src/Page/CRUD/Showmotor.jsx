import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ShowMotor = () => {
  const { motorId } = useParams();
  const motorApi = `http://localhost:3000/motors`;

  const [motor, setMotor] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getMotor();
  }, [motorId]);

  const getMotor = () => {
    setIsLoading(true);
    axios
      .get(motorApi)
      .then((res) => {
        const motorData = res.data.find(motor => motor.motor_id === motorId);
        console.log(motorData);
        setMotor(motorData);
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