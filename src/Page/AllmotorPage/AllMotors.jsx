import NavigationBar from "../../component/NavigationBar/NavigationBar";
import './AllMotors.css'
import { Link  , useNavigate} from 'react-router-dom';
import React, { useState } from 'react';
import Popup from 'reactjs-popup';

export default function AllMotors(){

    
    return(
        <>
            <NavigationBar/>
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
                                        <div className='modal-content'>
                                            <p>Enter Motor ID</p>
                                            <form>
                                                <input name="Motor-ID" id="Motor-ID" type="Text" placeholder="Motor ID" className="motorID-input"></input>
                                            </form>
                                            
                                        </div>
                                        <div className="modal-button-box">
                                            <button onClick={() => close()} className="Close-button">Close</button>
                                            <button className="modal-submit-button">Add New Motor</button>
                                        </div>
                                    </div>
                                </>
                                )
                            }
                        </Popup>   
                    </div>
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