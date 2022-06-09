import "./iconText.scss"
import { Link } from "react-router-dom";

const IconText = ({icon, text, path, setActiveClass, activeClass}) => {

    const handleChangeIconText = (path)=>{
        setActiveClass(path)
    }
    
    return ( 
        <div 
        className={"iconText " +((activeClass===path)?"iconText--active":"")}
        onClick={()=>handleChangeIconText(path)}
        >
            <i className="iconText__icon  ">
                {icon}
            </i>
            <Link to={path} className="iconText__text">{text}</Link>
        </div>
     );
}
 
export default IconText;