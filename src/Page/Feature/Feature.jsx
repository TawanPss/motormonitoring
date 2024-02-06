import LandingHeader from "../../component/NavigationBar/LandingHeader";
import { FiMenu } from "react-icons/fi";
import Featurecomponent from "./Featurecomponent";
import { Element } from "react-scroll";
export default function Feature(){
    return(
        <>
        <Element name="feature">
        <Featurecomponent />
        </Element>
        </>
    )
}