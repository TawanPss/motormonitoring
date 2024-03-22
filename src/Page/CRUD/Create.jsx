import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const CreateMotor = () => {
    const navigate = useNavigate();
    const createMotorApi = "http://localhost:3000/motors"
    const [motor, setMotor] = useState({
        motor_id: "",
        sensors: []
    })

    const handleInput = (event) => {
        const { name, value } = event.target;
        setMotor({ ...motor, [name]: value });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // First, check if a motor with the same motor_id already exists
            const checkResponse = await axios.get(`${createMotorApi}`);
            if (checkResponse.data) {
                const existingMotor = checkResponse.data.find(m => m.motor_id === motor.motor_id);
                if (existingMotor) {
                    // If it does, navigate to '/show-motor'
                    navigate('/show-motor');
                } else {
                    // If it doesn't, alert the user
                    alert('No motor with the given motor_id exists in the database');
                }
            } else {
                console.log('No motors exist in the database');
            }
        } catch (error) {
            console.log('An error occurred:', error);
        }
    }

    return (
        <div className='motor-form'>
            <div className='heading'>
                <p>Motor Form</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="motor_id" className="form-label">Motor ID</label>
                    <input type="text" className="form-control" id="motor_id" name="motor_id" value={motor.motor_id} onChange={handleInput} />
                </div>
                <button type="submit" className="btn btn-primary submit-btn">Submit</button>
            </form>
        </div>
    )
}
 
export default CreateMotor 