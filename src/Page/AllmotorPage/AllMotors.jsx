import NavigationBar from "../../component/NavigationBar/NavigationBar";
import './AllMotors.css'

export default function AllMotors(){
    return(
        <>
            <NavigationBar/>
            <div className="all-motors-container">
                <div className="motor-list-container">
                    <div className="table-header">
                        <text>Motor Name</text>
                        <text>Motor ID</text>
                        <text>Department</text>
                        <text>Status</text>
                        <button className="Add-New-Motor-button" type="submit">Add New Motor</button>
                    </div>
                    <div className="motor-box">
                        <text>ABCDEFGHIJ</text>
                        <text>88888888</text>
                        <text>production</text>
                        <text>Active</text>
                        <button className="More-Detail-button" type="submit">More Detail</button>
                    </div>
                    <div className="motor-box">
                        <text>ABCDEFGHIJ</text>
                        <text>88888888</text>
                        <text>production</text>
                        <text>Active</text>
                        <button className="More-Detail-button" type="submit">More Detail</button>
                    </div>
                    <div className="motor-box">
                        <text>ABCDEFGHIJ</text>
                        <text>88888888</text>
                        <text>production</text>
                        <text>Active</text>
                        <button className="More-Detail-button" type="submit">More Detail</button>
                    </div>
                    <div className="motor-box">
                        <text>ABCDEFGHIJ</text>
                        <text>88888888</text>
                        <text>production</text>
                        <text>Active</text>
                        <button className="More-Detail-button" type="submit">More Detail</button>
                    </div>

                </div>

            </div>
        </>
    )
}