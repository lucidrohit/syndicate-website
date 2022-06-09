import "./events.scss"
import HeadingText from "../../components/common/headingText/headingText";

import Cards from "../../components/cards/cards";


const Events = () => {
    return (
        <div className="events">
            <div className="container">
                <HeadingText>live events</HeadingText>
                <Cards />
            </div>
            <div className="container">
                <HeadingText>past events</HeadingText>
            </div>
        </div>
    );
}

export default Events;

