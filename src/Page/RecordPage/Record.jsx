import NavigationBar from "../../component/NavigationBar/NavigationBar"
import "./Record.css"



export default function Record(){
    return(<>
    <NavigationBar />

    <div className="record-container">
        <h1 className="record-Header">Record</h1>
        <div className="record-list-container">
            <div className="record-table-header">
                <div className="sub-record-box">
                    <p>File Name</p>
                </div>
                <div className="sub-record-box">
                    <p>Motor ID</p>
                </div>
                <div className="sub-record-box">
                    <p>Date</p>
                </div>
                <div className="sub-record-box">
                    
                </div>      
            </div>
            <div className="record-box">
                <div className="sub-record-box">
                    <p>File Name</p>
                </div>
                <div className="sub-record-box">
                    <p>Motor ID</p>
                </div>
                <div className="sub-record-box">
                    <p>Date</p>
                </div>
                <div className="sub-record-box">
                    <button className="Download-button">Download</button>
                    <button className="Delete-button">Delete</button>
                </div>  
            </div>

        </div>
    </div>

    
    </>)
}