import NavigationBar from "../../component/NavigationBar/NavigationBar";
import './NewMotorPage.css';

export default function NewMotor(){
    return(
        <>
        <NavigationBar/>
        
            <div className="ctn">
                    
                    <form className="inputctn">
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
                        <button className="submit-button">Connect Motor</button>
                        

                    </form>
            </div>
                


        
        

        </>
    )
}