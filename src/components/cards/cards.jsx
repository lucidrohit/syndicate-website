import "./cards.scss";
import Card from "../common/card/card";
import logo from "../../assets/imgs/carousel.webp";

let cards = [
  {
    img: logo,
    head: "Recoil",
    info: "The official media club of NIT Srinagar announces RECOIL- the eSports  tournament,  welcoming all thegamers to battle it out to be the ultimate champion.....",
  },
  {
    img: logo,
    head: "Recoil",
    info: "The official media club of NIT Srinagar announces RECOIL- the eSports  tournament,  welcoming all thegamers to battle it out to be the ultimate champion.....",
  },
  {
    img: logo,
    head: "Recoil",
    info: "The official media club of NIT Srinagar announces RECOIL- the eSports  tournament,  welcoming all thegamers to battle it out to be the ultimate champion.....",
  },
  {
    img: logo,
    head: "Recoil",
    info: "The official media club of NIT Srinagar announces RECOIL- the eSports  tournament,  welcoming all thegamers to battle it out to be the ultimate champion.....",
  },
  {
    img: logo,
    head: "Recoil",
    info: "The official media club of NIT Srinagar announces RECOIL- the eSports  tournament,  welcoming all thegamers to battle it out to be the ultimate champion.....",
  },
];

function Cards() {
  return (
    <div className="cards">
      {cards.map(({ img, head, info }, index) => (
        <Card key={index} img={img} head={head} info={info} />
      ))}
    </div>
  );
}

export default Cards;
