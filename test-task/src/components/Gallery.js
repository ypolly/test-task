import { Carousel } from "react-bootstrap";

const Gallery = (props) => {
  const data = props.data;
  return (
    <div className="carosel-block">
      <Carousel>
        {data.vehicleImages.map((element, i) => {
          return (
            <Carousel.Item key={i}>
              <img className="d-block w-100" src={element} />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Gallery;
