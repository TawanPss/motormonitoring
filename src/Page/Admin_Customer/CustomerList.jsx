import { Link } from "react-router-dom"
import NavigationBar from "../../component/NavigationBar/NavigationBar"
import AdminNavigationBar from "../../component/NavigationBar/AdminNavigationBar";
import "./CustomerList.css"
import Popup from 'reactjs-popup';

export default function CustomerList(){
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
            <div className="customer-box">
                <div className="sub-customer-box">
                    <p>Customer Name</p>
                </div>
                <div className="sub-customer-box">
                    <p>ABC12345</p>
                </div>
                <div className="sub-customer-box">
                    <p>1025</p>
                </div>
                <div className="sub-customer-box-2">
                    <button className="motor-list-button"><Link className="Link-No-underline" to="/admin-customer-motor-list">Motor List</Link></button>
                    <button className="Add-Motor-button"><Link className="Link-No-underline" to="/admin-new-motor">Add New Motor</Link></button>
                    <Popup trigger=
                            {<button className="Delete-Motor-button">Delete Motor</button>} 
                            modal nested>
                            {
                                close => (
                                    <>
                                    <div className='Ctm-modal-overlay' onClick={close}></div> 
                                    <div className='Ctm-modal'>
                                        <div className="Ctm-modal-header-box">
                                            <p>Enter Motor ID</p>
                                            <button onClick={() => close()} className="Ctm-Close-button">X</button>
                                        </div>
                                        <div className='Ctm-modal-content'>
                                            <input name="Motor-ID" id="Motor-ID" type="Text" placeholder="Motor ID" className="Ctm-motorID-input"></input>
                                            <button className="Ctm-modal-delete-button">Delete Motor</button>
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