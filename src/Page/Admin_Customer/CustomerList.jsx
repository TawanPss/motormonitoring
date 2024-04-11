import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import { addMotorToCustomer, deleteMotorFromCustomer, getAllUsers } from "../../component/API/AdminUtils";
import AdminNavigationBar from "../../component/NavigationBar/AdminNavigationBar";
import Popup from 'reactjs-popup';
import "./CustomerList.css"

export default function CustomerList(){
    const [motor_id, setMotorID] = useState(null);
    const [users, setUsers] = useState([]);

    const handleAddMotor = (user_id) => {
        const fetchData = async() =>{
            const body = {
                user_id: user_id,
                motor_id: motor_id
            }
            try{
                const data = await addMotorToCustomer(body);
                console.log(data);
            }catch(err){
                console.log(err);
            }
        }
        fetchData();
    };

    const handleDeleteMotor = (user_id) => {
        const fetchData = async() =>{
            const body = {
                user_id: user_id,
                motor_id: motor_id
            }
            try{
                const data = await deleteMotorFromCustomer(body);
                console.log(data);
            }catch(err){
                console.log(err);
            }
        }
        fetchData();
    };

    useEffect(() => {
        async function getUsers(){
            try{
                const data = await getAllUsers();
                setUsers(data.users);
            }
            catch(err){
                console.log(err);
            }
        }
        getUsers();
    }, []);

    return(
        <>
        <AdminNavigationBar/>
        <div className="customer-container">
        <h1 className="customer-Header">Customer List</h1>
        <div className="customer-list-container">
            <div className="customer-table-header">
                <div className="sub-customer-box">
                    <p>Customer Name</p>
                </div>
                <div className="sub-customer-box">
                    <p>Customer ID</p>
                </div>
                <div className="sub-customer-box">
                    <p>Quantity of Motor</p>
                </div>
                <div className="sub-customer-box-2">
                    
                </div>     
            </div>
            {users?.map((user) => (
                <div className="customer-box">
                <div className="sub-customer-box">
                    <p>{user.username}</p>
                </div>
                <div className="sub-customer-box">
                    <p>{user.user_id}</p>
                </div>
                <div className="sub-customer-box">
                    <p>{user.motor_owned.length}</p>
                </div>
                <div className="sub-customer-box-2">
                    <button className="motor-list-button"><Link className="Link-No-underline" to="/admin-customer-motor-list">Motor List</Link></button>
                    {/* <button className="Add-Motor-button"><Link className="Link-No-underline" to="/admin-new-motor">Add New Motor</Link></button> */}
                    <Popup trigger={<button className="btn Add-Motor-button">Add New Motor</button>} 
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
                                            <button className="btn Add-Motor-button" onClick={handleAddMotor(user.user_id)}>Add Motor</button>
                                        </div>
                                        
                                    </div>
                                </>
                                )
                            }
                        </Popup>
                    <Popup trigger={<button className="btn Delete-Motor-button">Delete Motor</button>} 
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
                                            <button className="btn Ctm-modal-delete-button" onClick={handleDeleteMotor(user.user_id)}>Delete Motor</button>
                                        </div>
                                        
                                    </div>
                                </>
                                )
                            }
                        </Popup>
                </div>  
            </div>
            ))}
            <div className="customer-box">
                <div className="sub-customer-box">
                    <p>Example</p>
                </div>
                <div className="sub-customer-box">
                    <p>ABC12345</p>
                </div>
                <div className="sub-customer-box">
                    <p>1025</p>
                </div>
                <div className="sub-customer-box-2">
                    <button className="motor-list-button"><Link className="Link-No-underline" to="/admin-customer-motor-list">Motor List</Link></button>
                    {/* <button className="Add-Motor-button"><Link className="Link-No-underline" to="/admin-new-motor">Add New Motor</Link></button> */}
                    <Popup trigger={<button className="btn Add-Motor-button">Add New Motor</button>} 
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
                                            <button className="btn Add-Motor-button" onClick={handleAddMotor()}>Add Motor</button>
                                        </div>
                                        
                                    </div>
                                </>
                                )
                            }
                        </Popup>
                    <Popup trigger={<button className="btn Delete-Motor-button">Delete Motor</button>} 
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
                                            <button className="btn Ctm-modal-delete-button" onClick={handleDeleteMotor}>Delete Motor</button>
                                        </div>
                                        
                                    </div>
                                </>
                                )
                            }
                        </Popup>
                </div>  
            </div>
        </div>
    </div>
        </>
    )
}