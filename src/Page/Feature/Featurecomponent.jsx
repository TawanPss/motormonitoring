import Feature_pic from "./Featurepic.png";
import Health_monitor from "./image1.png";
import Output_tracking from "./image2.png";
import Downtime from "./image3.png";
import Protection_data from "./image4.png";
import Multiview from "./image5.png";
import Sensor from "./image6.png";
import "./Featurecomponent.css";
export default function Featurecomponent() {
  return (
    <>
      <div className="Feature-container">
        <div className="feature-header">
          <div className="anf-motor"><h1>ANF Motor Monitoring System Feature</h1></div>
          <img className="Feature-pic" src={Feature_pic} />
        </div>

        <div className="Feature-list">
          <div className="Health-monitoring">
            <img className="Health-monitoring-img" src={Health_monitor} />
            <p>Machine Health Monitoring</p>
          </div>

          <div className="Output-tracking">
            <img className="Output-tracking-img" src={Output_tracking} />
            <p>Production Output Tracking</p>
          </div>

        <div className="Downtime">
        <img className="Downtime-img" src={Downtime} />
            <p>Downtime Notification</p>
        </div>

          <div className="Protection-data">
            <img className="Protection-data-img" src={Protection_data} />
            <p>Production Data</p>
          </div>

          <div className="Multiview">
            <img className="Multiview-img" src={Multiview} />
            <p>Multiview Mornitoring</p>
          </div>

          <div className="Sensor">
            <img className="Sensor-img" src={Sensor} />
            <p>Sensors on machines</p>
          </div>
        </div>
      </div>
    </>
  );
}
