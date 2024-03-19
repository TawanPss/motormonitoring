import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";

const CreateMotor = () => {
    const navigate = useNavigate();
    const createMotorApi = "http://localhost:3001/motors"
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [motor, setMotor] = useState({
        motor_id: "",
        sensors: []
    })

    useEffect(() => {
        const fetchMotorData = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(`${createMotorApi}/${motor.motor_id}`);
                const data = await response.json();
                setMotor(data);
                console.log(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        }

        if (motor.motor_id) {
            fetchMotorData();
        }
    }, [motor.motor_id]);

    const handleInput = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setMotor({ ...motor, [name]: value });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            setIsLoading(true);
            const response = await fetch(createMotorApi, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(motor),
            });

            if (response.ok) {
                console.log('Form submitted successfully!');
                setMotor({motor_id: "", sensors: []})
                navigate('/show-motor');
            } else {
                console.error('Form submission failed!');
            }

        } catch (error) {
            setError(error.message);
        } finally{
            setIsLoading(false);
        }
    }

    return (
        <div className='motor-form'>
            <div className='heading'>
                <p>Motor Form</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label for="motor_id" className="form-label">Motor ID</label>
                    <input type="text" className="form-control" id="motor_id" name="motor_id" value={motor.motor_id} onChange={handleInput} />
                </div>
                <button type="submit" className="btn btn-primary submit-btn">Submit</button>
            </form>
        </div>
    )
}

export default CreateMotor