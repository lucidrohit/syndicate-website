import Button from "../button/button";
import "./card.scss";

function Card({ img, head, info }) {
  return (
    <div className="card">
      <div className="card__img">
        <img src={img} alt="event" />
      </div>
      <div className="card__content">
        <div className="content__date">
          <div className="date__month">June</div>
          <div className="date__day">11</div>
        </div>
        <div className="content__info">
          <h5 className="info__heading">{head}</h5>
          <p className="info__paragraph">{info}</p>
        </div>
      </div>
      <div className="content__registration">
        <Button label={"Registerations Starts"} />
        <div className="register__info">
          <p className="register__para">45 Registered</p>
          <p className="register__para">11 Days left.</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
