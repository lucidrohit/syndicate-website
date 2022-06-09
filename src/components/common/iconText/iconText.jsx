import "./iconText.scss"
import { Link } from "react-router-dom";

const IconText = ({icon, text, path}) => {

    return ( 
        <div className="iconText iconText--active">
            <i className="iconText__icon  ">
                {icon}
            </i>
            <Link to={path} className="iconText__text">{text}</Link>
        </div>
     );
}
 
export default IconText;