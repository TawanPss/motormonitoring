
import { useNavigate } from 'react-router-dom';
import NavigationBar from "../../component/NavigationBar/NavigationBar"
import AdminNavigationBar from '../../component/NavigationBar/AdminNavigationBar';
import './NewMotorPage.css';


export default function NewMotorPage() {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const motorName = event.target.elements['Motor-Name'].value;
        const motorId = event.target.elements['Motor-ID'].value;
        const department = event.target.elements['Department'].value;
        const motorSeries = event.target.elements['Motor-Series'].value;

        const slug = `motor-page-${Date.now()}`;

        navigate(`/motor-pages/${slug}`, { state: { motorName, motorId, department, motorSeries } });
    };

    return (
        <>
            <AdminNavigationBar />
            <div className="ctn">
                <form className="inputctn" onSubmit={handleSubmit}>
                    <h1>Add The New Motor</h1>
                    <div className="label-input">
                        <label className="label_Text">Motor Name</label>
                        <input name="Motor-Name" id="Motor-Name" type="Text" placeholder="Motor name" className="input-form"></input>
                    </div>
                    <div className="label-input">
                        <label className="label_Text">Motor ID</label>
                        <input name="Motor-ID" id="Motor-ID" type="Text" placeholder="Motor ID" className="input-form"></input>
                    </div>
                    <div className="label-input">
                        <label className="label_Text">Department</label>
                        <input name="Department" id="Department" type="Text" placeholder="Choose Department" className="input-form"></input>
                    </div>
                    <div className="label-input">
                        <label className="label_Text">Motor Series</label>
                        <input name="Motor-Series" id="Motor-Series" type="Text" placeholder="Motor Series" className="input-form"></input>
                    </div>
                    <button className="submit-button" type="submit">Connect Motor</button>
                </form>
            </div>
        </>
    );
}