import React, { useEffect, useState } from 'react';
import NavigationBar from "../../component/NavigationBar/NavigationBar";
import { Link, useNavigate } from 'react-router-dom';
import AdminNavigationBar from "../../component/NavigationBar/AdminNavigationBar";
import { useSelector, useDispatch } from 'react-redux';
import { deleteMotorFromCustomer, getUserById, addMotorToCustomer } from '../../component/APIs/AdminAPIs';
import { setCustomer } from '../../slicers/userSlice';
import Swal from 'sweetalert2';
import Popup from 'reactjs-popup';

import './CustomerMotorList.css'

export default function CustomerMotorList(){
    const [motor_id, setMotorID] = useState(null);
    const customer = useSelector((state) => state.user.customer)
    const motorOwned = useSelector((state) => state.user.customer.motor_owned)
    const dispatch = useDispatch();
    const handleDelete = (id) => {
        const body = {
            user_id: customer.user_id,
            motor_id: id
        }
        deleteMotorFromCustomer(body)
        .then((data) => {
            Swal.fire({
                title: 'Delete motor completed',
                text: `${data.motor_id} has been removed from this user.`,
                icon: "success",
                confirmButtonText: 'Ok'
            }).then((result) => {
                if(result.isConfirmed){
                  window.location.reload()
                }
            })
        })
        .catch((err) => {
            Swal.fire({
                title: 'Delete motor Failed!',
                text: `${err}`,
                icon: "error",
                confirmButtonText: 'Okay'
            });
        })
    }

    const handleAddMotor = (user_id) => {
        const body = {
            user_id: user_id,
            motor_id: motor_id
        }
        addMotorToCustomer(body)
        .then((data) => {
            Swal.fire({
                title: 'Add motor success',
                text: `${motor_id} has been added to user.`,
                icon: 'success',
                confirmButtonText: 'Okay'
            }).then((result) => {
                if(result.isConfirmed){
                    window.location.reload();
                }
            })
        })
        .catch((err) => {
            Swal.fire({
                title: "Add motor Failed!",
                icon: 'error',
                confirmButtonText: 'Okay'
            });
        })
        
    
    };

    
    useEffect(() => {
        const userId = {
            user_id: customer.user_id 
        }
        dispatch(getUserById(userId)).unwrap()
        .then((data) => {
            dispatch(setCustomer(data.user))
        })

        console.log(motorOwned);
    }, [])

    return(
        <>
            <AdminNavigationBar/>
            <div className="Ctm-motors-container">
                <h1 className="Ctm-Motor-header-text">Customer motor list</h1>
                <div className="Ctm-motor-list-container">
                    <div className="Ctm-table-header">
                        <div className="Ctm-sub-motor-box">
                            <p>Motor Name</p>
                        </div>
                        <div className="Ctm-sub-motor-box">
                            <p>Motor ID</p>
                        </div>
                        <div className="Ctm-sub-motor-box">
                            <p>Department</p>
                        </div>    
                        <div className="Ctm-sub-motor-box">
                            <p>Status</p>
                        </div>
                        <Popup trigger={<button className="btn Add-Motor-button">Add Motor</button>} 
                            modal nested>
                            {
                                close => (
                                    <>
                                    <div className='Ctm-modal-overlay' onClick={close}></div> 
                                    <div className='Ctm-modal'>
                                        <div className="Ctm-modal-header-box">
                                            <p>Enter Motor ID</p>
                                            <button onClick={() => close()} className="btn Ctm-Close-button">X</button>
                                        </div>
                                        <div className='Ctm-modal-content'>
                                            <input name="Motor-ID" id="Motor-ID" type="Text" placeholder="Motor ID" className="Ctm-motorID-input"
                                                onChange={(e) => setMotorID(e.target.value)}
                                            />
                                            <button className="btn Add-Motor-button" onClick={() => handleAddMotor(customer.user_id)}>Add Motor</button>
                                        </div>
                                        
                                    </div>
                                </>
                                )
                            }
                        </Popup>
                                    
                    </div>
                    {motorOwned?.map((motor) => (
                        <div className="Ctm-motor-box">
                        <div className="Ctm-sub-motor-box">
                            <p>{motor.motor_id}</p>
                        </div>
                        <div className="Ctm-sub-motor-box">
                            <p>{motor.motor_id}</p>
                        </div>
                        <div className="Ctm-sub-motor-box">
                            <p>Production</p>
                        </div>
                        <div className="Ctm-sub-motor-box">
                            <p>Active</p>
                        </div>
                        {/* <button className="Ctm-More-Detail-button" type="submit">More Detail</button> */}
                        <button className="Ctm-Delete-button" onClick={() => handleDelete(motor.motor_id)}>Delete</button>
                    </div>
                    ))}
                    {/* <div className="Ctm-motor-box">
                        <div className="Ctm-sub-motor-box">
                            <p>ABCDEFGHIJ</p>
                        </div>
                        <div className="Ctm-sub-motor-box">
                            <p>xj12</p>
                        </div>
                        <div className="Ctm-sub-motor-box">
                            <p>Production</p>
                        </div>
                        <div className="Ctm-sub-motor-box">
                            <p>Active</p>
                        </div>
                        <button className="Ctm-More-Detail-button" type="submit">More Detail</button>
                        <button className="Ctm-Delete-button" type="submit">Delete</button>
                    </div> */}
                    

                </div>

            </div>
        </>
    )
}