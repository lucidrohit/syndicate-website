import "./button.scss"

const Button = ({label, classes}) => {
    return ( 
        <button className={"btn " + classes || null}>{label}</button>
     );
}
 
export default Button;