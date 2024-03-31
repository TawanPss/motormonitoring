import LandingHeader from "../../component/NavigationBar/LandingHeader";
import ParagraphAbout from "./ParagraphAbout";
import { Element } from "react-scroll";
export default function AboutUs() {
    return (
      <>
      <Element name="about" >
        <ParagraphAbout />
      </Element>
      </>
    );
  }
  