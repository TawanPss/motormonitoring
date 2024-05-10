import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addNewMotor } from '../../component/APIs/AdminAPIs';
import AdminNavigationBar from '../../component/NavigationBar/AdminNavigationBar';
import './NewMotorPage.css';


export default function NewMotorPage() {
    const navigate = useNavigate();
    const [motor_id, setMotorID] = useState(null);
    const [motor_name, setMotorName] = useState(null);
    const [department, setDepartment] = useState(null);
    const [series, setSeries] = useState(null);
    const [location, setLocation] = useState(null);


    const handleSubmit = (event) => {
        event.preventDefault();

        const fetchData = async() =>{
            const body = {
                motor_id: motor_id,
                motor_name: motor_name,
                location: location,
                series: series,
                department: department
            }
            try{
                const data = await addNewMotor(body);
                console.log(data);
                navigate("/admin-all-motors");
            }catch(err){
                console.log(err);
            }
        }
        fetchData();
        // const slug = `motor-page-${Date.now()}`;

        // navigate(`/motor-pages/${slug}`, { state: { motorName, motorId, department, motorSeries } });
    };

    return (
        <>
            <AdminNavigationBar />
            <div className="ctn">
                <form className="inputctn" onSubmit={handleSubmit}>
                    <h1>Add The New Motor</h1>
                    <div className="label-input">
                        <label className="label_Text">Motor Name</label>
                        <input name="Motor-Name" id="Motor-Name" type="Text" placeholder="Motor name" className="input-form"
                            onChange={(e) => setMotorName(e.target.value)}
                        />
                    </div>
                    <div className="label-input">
                        <label className="label_Text">Motor ID</label>
                        <input name="Motor-ID" id="Motor-ID" type="Text" placeholder="Motor ID" className="input-form"
                            onChange={(e) => setMotorID(e.target.value)}
                        />
                    </div>
                    <div className="label-input">
                        <label className="label_Text">Department</label>
                        <input name="Department" id="Department" type="Text" placeholder="Choose Department" className="input-form"
                            onChange={(e) => setDepartment(e.target.value)}
                        />
                    </div>
                    <div className="label-input">
                        <label className="label_Text">Motor Series</label>
                        <input name="Motor-Series" id="Motor-Series" type="Text" placeholder="Motor Series" className="input-form"
                            onChange={(e) => setSeries(e.target.value)}
                        />
                    </div>
                    <div className="label-input">
                        <label className="label_Text">Location</label>
                        <input name="Location" id="Location" type="Text" placeholder="Location" className="input-form"
                            onChange={(e) => setLocation(e.target.value)}
                        />
                    </div>
                    <button className="submit-button" type="submit">Add Motor</button>
                </form>
            </div>
        </>
    );
}