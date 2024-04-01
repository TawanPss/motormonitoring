import NavigationBar from "../../component/NavigationBar/NavigationBar";
import AdminNavigationBar from "../../component/NavigationBar/AdminNavigationBar";
import './CustomerMotorList.css'
import { Link  , useNavigate} from 'react-router-dom';
import React, { useState } from 'react';

export default function CustomerMotorList(){

    
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
                        <button className="Ctm-Add-Motor-button"><Link className="Link-No-underline" to="/admin-new-motor">Add New Motor</Link></button>
                        
                                    
                    </div>
                    <div className="Ctm-motor-box">
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
                    </div>
                    

                </div>

            </div>
        </>
    )
}