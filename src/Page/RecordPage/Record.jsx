import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavigationBar from "../../component/NavigationBar/NavigationBar"
import { getUserData } from "../../component/API/UserUtils";
import "./Record.css"


export default function Record(){
    const [motors, setMotors] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        getUser();
      }, []);
      
      const getUser = async () => {
        try{
          setIsLoading(true);
          const user = await getUserData();
          setMotors(user.motor_owned)
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
            {motors?.map((motor) => (
                <div key={motor.motor_id} className="record-box">
                    
                    <div className="sub-record-box">
                        <p>{motor.motor_id}</p>
                    </div>
                    <div className="sub-record-box">
                        <p>{new Date().toLocaleDateString()}</p>
                    </div>
                    <div className="sub-record-box">
                        <Link to={`/record/${motor.motor_id}`}>
                            <button className="btn View-button">View</button>
                        </Link>
                    </div>
                </div>
            ))}
            

        </div>
    </div>

    
    </>)
}