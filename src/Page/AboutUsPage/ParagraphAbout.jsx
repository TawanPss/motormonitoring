import img1 from "./pic1.png";
import img2 from "./pic2.png";
import "./ParagraphAbout.css"
export default function ParagraphAbout() {
  return (
    <>
    <div className="para-container">
      <div className="para1">
        <img src={img1} />
        <p>
          Founded with a passion for technology and a commitment to excellence ,
          ANF Motor Monitoring strives to be the go-to solution for businesses
          seeking a comprehensive and user-friendly platform to monitor their
          motor systems. Our team of experienced engineers and developers have
          crafted a powerful and intuitive web application that enables users to
          remotely monitor key metrics, detect anomalies, and receive timely
          alerts to address potential issues before they escalate.
        </p>
      </div>
      <div className="para2">
        <p>
          ANF Motor Monitoring is not just a product; it's a partnership. We are
          committed to providing ongoing support and continuous improvements to
          meet the evolving needs of our clients. Join us on the journey to
          transform motor monitoring and elevate the performance of your
          operations. Experience the future of motor management with ANF Motor
          Monitoring – where innovation, reliability, and efficiency converge
          for unparalleled results.
        </p>
        <img src={img2} />
      </div>
      </div>
    </>
  );
}
