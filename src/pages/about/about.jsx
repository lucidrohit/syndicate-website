import CarouselComponent from "../../components/common/carouselComponent/CarouselComponent";
import HeadingText from "../../components/common/headingText/headingText";
import "./about.scss"

import logo from "../../components/common/carouselComponent/carousel.svg"
import Cards from "../../components/cards/cards";

const carouselData = [
    {
        logo: logo,
        name: "Recoil"
    },
    {
        logo: logo,
        name: "Recoil"
    },
    {
        logo: logo,
        name: "Recoil"
    },
    {
        logo: logo,
        name: "Recoil"
    },
    {
        logo: logo,
        name: "Recoil"
    },
]


const About = () => {
    return (
        <div className="about">
            <div className="container">
                <HeadingText>upcoming text</HeadingText>
                <CarouselComponent list={carouselData} />
            </div>
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

export default About;

