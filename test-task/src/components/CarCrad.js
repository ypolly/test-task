import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";

const CarCard = (props) => {
  const car = props.car;
  console.log("dhefbuavbu");
  return (
    <div className="card-block">
      <img src={car.image} className="card__img" />
      <div className="car__location">
        <FontAwesomeIcon icon={faMapMarker} />
        <div className="car__location-name">Möller bil Göteborg</div>
      </div>
      <div className="card__name">{car.brand}</div>
      <div className="card__model">{car.model}</div>

      <div className="card__attrs">
        <div className="card__attr">
          <p className="card__attr__name">Pris</p>
          <p className="card__attr__value">{car.price} kr</p>
          <div className="dotted_line"></div>
        </div>
        <div className="card__attr">
          <p className="card__attr__name">Privatsleasing</p>
          <p className="card__attr__value">4799 kr/ mån</p>
          <div className="dotted_line"></div>
        </div>
      </div>

      <div className="car__supplier">DasWeltAuto.</div>
    </div>
  );
};

export default CarCard;
