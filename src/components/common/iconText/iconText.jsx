import "./iconText.scss"

const IconText = ({icon, text}) => {
    return ( 
        <div className="iconText">

            <i className="iconText__icon">
                {icon}
            </i>
            <a href="/" className="iconText__text">{text}</a>
        </div>
     );
}
 
export default IconText;