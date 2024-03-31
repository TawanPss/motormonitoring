import NavigationBar from "../../component/NavigationBar/NavigationBar";
import './AllMotors.css'

export default function AllMotors(){
    return(
        <>
            <NavigationBar/>
            <div className="all-motors-container">
                <div className="motor-list-container">
                    <div className="table-header">
                        <p>Motor Name</p>
                        <p>Motor ID</p>
                        <p>Department</p>
                        <p>Status</p>
                        <button className="Add-New-Motor-button" type="submit">Add New Motor</button>
                    </div>
                    <div className="motor-box">
                        <p>ABCDEFGHIJ</p>
                        <p>88888888</p>
                        <p>production</p>
                        <p>Active</p>
                        <button className="More-Detail-button" type="submit">More Detail</button>
                    </div>
                    

                </div>

            </div>
        </>
    )
}