import AdminNavigationBar from '../../component/NavigationBar/AdminNavigationBar';
import React, { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';
import { getAllMotors } from '../../component/API/AdminUtils';
import './AllMotors.css'
import { FaS } from 'react-icons/fa6';

export default function AdminAllMotors(){
    const [motors, setMotors] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const data = await getAllMotors();
            setMotors(data.data);
        }
        fetchData();
    }, []);

    const isMotorActive = (motor) => {
        return motor != null ? true : false;
    };
    
    return(
        <>
            <AdminNavigationBar/>
            <div className="all-motors-container">
                <h1 className="AllMotor-header">All Motors</h1>
                <div className="motor-list-container">
                    <div className="table-header">
                        <div className="sub-motor-box">
                            <p>Motor Name</p>
                        </div>
                        <div className="sub-motor-box">
                            <p>Motor ID</p>
                        </div>
                        <div className="sub-motor-box">
                            <p>Department</p>
                        </div>    
                        <div className="sub-motor-box">
                            <p>Status</p>
                        </div>
                        <Popup trigger=
                            {<button className="Add-New-Motor-button">Add New Motor</button>} 
                            modal nested>
                            {
                                close => (
                                    <>
                                    <div className='modal-overlay' onClick={close}></div> 
                                    <div className='modal'>
                                    <div className="modal-header-box">
                                            <p>Enter Motor ID</p>
                                            <button onClick={() => close()} className="Close-button">X</button>
                                        </div>
                                        <div className='modal-content'>
                                            <input name="Motor-ID" id="Motor-ID" type="Text" placeholder="Motor ID" className="motorID-input"></input>
                                            <button className="modal-submit-button">Add New Motor</button>
                                        </div>
                                    </div>
                                </>
                                )
                            }
                        </Popup>   
                    </div>
                    {motors?.map((motor) => (
                        <div key={motor.motor_id} className="motor-box">
                            <div className="sub-motor-box">
                                <p>Motor ID: {motor.motor_id}</p>
                            </div>
                            <div className="sub-motor-box">
                                <p>Sensor ID: {motor.motor_id}</p>
                            </div>
                            <div className="sub-motor-box">
                                <p>Production</p>
                            </div>
                            <div className="sub-motor-box">
                            <p>{isMotorActive(motor) ? 'Active' : 'Inactive'}</p>
                            </div>
                            <button className="More-Detail-button" type="submit">
                                <Link to={`/show-motor/${motor.motor_id}`}>More Detail</Link>
                            </button>
                        </div>
                    ))}
                    <div className="motor-box">
                        <div className="sub-motor-box">
                            <p>ABCDEFGHIJ</p>
                        </div>
                        <div className="sub-motor-box">
                            <p>xj12</p>
                        </div>
                        <div className="sub-motor-box">
                            <p>Production</p>
                        </div>
                        <div className="sub-motor-box">
                            <p>Active</p>
                        </div>
                        <button className="More-Detail-button" type="submit">More Detail</button>
                    </div>
                    

                </div>

            </div>
        </>
    )
}