import { useEffect, useState } from "react";
import NavigationBar from "../../component/NavigationBar/NavigationBar"
import { getRecords } from "../../component/API/ApiComponent"
import "./Record.css"


export default function Record(){
    const [motors, setMotors] = useState([]);

    useEffect(() => {
        getUser();
      }, []);
      
      const getUser = async () => {
        try{
          setIsLoading(true);
          const token = getCookie('token');
          console.log(token);
          const reqOption = {
            method: "POST",
            headers:{
              'Authorization': `Bearer ${token}`
            }
          };
          const res = await fetch(userApi,reqOption);
          if(res.ok){
            const data = await res.json()
            console.log(data);
            setMotors(data);
            setIsLoading(false);
          }
        }catch(err){
          setError(err);
          console.log(err);
        }
      }

    return(<>
    <NavigationBar />

    <div className="record-container">
        <h1 className="record-Header">Record</h1>
        <div className="record-list-container">
            <div className="record-table-header">
                <div className="sub-record-box">
                    <p>Motor ID</p>
                </div>
                <div className="sub-record-box">
                    <p>Date</p>
                </div>
                <div className="sub-record-box">
                    
                </div>      
            </div>
            {motors.motor_owned?.map((motor) => (
                <div key={motor.motor_id} className="record-box">
                    <div className="sub-record-box">
                        <p>{motor.motor_name}</p>
                    </div>
                    <div className="sub-record-box">
                        <p>{motor.motor_id}</p>
                    </div>
                    <div className="sub-record-box">
                        <p>{new Date().toLocaleDateString()}</p>
                    </div>
                    <div className="sub-record-box">
                        <Link to={`/record/${motor.motor_id}`}>
                            <button className="View-button">View</button>
                        </Link>
                    </div>
                </div>
            ))}
            

        </div>
    </div>

    
    </>)
}