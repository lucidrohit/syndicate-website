import "./CarouselComponent.scss"
import { Carousel } from "react-bootstrap";

import {useState} from "react"

import logo from "../../../assets/imgs/carousel.webp"


const list = [
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



function CarouselComponent() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
      <div className="carousel">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {list.map(({logo, name}, index)=>(
            <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={logo}
              alt={name}
            />
          </Carousel.Item>
          ))}
        </Carousel>
      </div>
    );
  }


export default CarouselComponent