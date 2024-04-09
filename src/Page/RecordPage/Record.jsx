import { useEffect, useState } from "react";
import NavigationBar from "../../component/NavigationBar/NavigationBar"
import { getRecords } from "../../component/API/ApiComponent"
import "./Record.css"


export default function Record(){
    const [records, setRecords] = useState(null);

    useEffect(() => {
        console.log("useEffect called");
        async function fetchData(){
            try{
                const data = await getRecords();
                setRecords(data.msg);
            }
            catch(err){
                console.log(err);
            } 
        }
        fetchData()
    }, []); 

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
            {records?.map((record) => (
                <div key={record.motor_id} className="record-box">
                    <div className="sub-record-box">
                        <p>{record.motor_name}</p>
                    </div>
                    <div className="sub-record-box">
                        <p>{record.motor_id}</p>
                    </div>
                    <div className="sub-record-box">
                        <p>{record.create_on}</p>
                    </div>
                    <div className="sub-record-box">
                        <button className="Download-button">Download</button>
                        <button className="Delete-button">Delete</button>
                    </div>  
                </div>
            ))}
            

        </div>
    </div>

    
    </>)
}