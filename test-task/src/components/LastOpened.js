import CarCard from "./CarCrad";

const LastOpened = (props) => {
  const data = props.data;

  return (
    <div className="opened-block">
      <div className="opened__title">Senaste besökta bilarna</div>
      <div className="opened__subtitle">
        Suspendisse aliquam ut dui non vestibulum. Vestibulum ut arcu
        mi.Suspendisse aliquam ut dui non vestibulum. Vestibulum ut arcu mi.
      </div>
      <div className="opened__row">
        {data.slice(0, 3).map((i, index) => {
          return <CarCard car={i} key={index} />;
        })}
      </div>
    </div>
  );
};

export default LastOpened;
