import "./headingText.scss"
import { firstWordCapital } from "../../../utils/text";

const HeadingText = ({ children: text }) => {
    const data = firstWordCapital(text)
    return (
        <h2 className="heading">{data}</h2>
    );
}

export default HeadingText;