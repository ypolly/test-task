import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  const product = props.product;

  const addDefaultSrc = (e) => {
    e.target.src = 'img/no-img.png'
  }
  return (
    <div className="product-block">
      <img src={product.image} className="product__img" onError={addDefaultSrc}/>
      <div className="product__location">
        <FontAwesomeIcon icon={faMapMarker} />
        <div className="product__location-name">Möller bil Göteborg</div>
      </div>
      <div className="product__model">{product.model}</div>
      <div className="product__version">{product.version}</div>
      <div className="product__attrs">
        <div className="product__attr">
          <p className="product__attr__name">Pris</p>
           <p className="product__attr__value">{product.price ? product.price+" kr " : "Fråga" }</p>
          <div className="dotted_line"></div>
        </div>
      </div>
    </div>
  );
};

export default Product;
