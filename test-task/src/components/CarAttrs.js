import { useState } from "react";
import CarInfo from "./CarInfo";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

const CarAttrs = (props) => {
  const [key, setKey] = useState("Bilfakta");
  const data = props.data;
  if (data != null) {
    return (
      <div className="carattrs-block">
        <div className="carattrs__heading">Till dig som företagare</div>

        <div className="carattrs__subtitle">
          Suspendisse aliquam ut dui non vestibulum. Maecenas blandit aliquet
          lorem. Suspendisse et aliquet nulla, sit amet pretium tellus.
          Vestibulum ut arcu mi.
        </div>

        <div className="caratts">
          <div className="carattrs__menu">
            <Tabs
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => setKey(k)}
            >
              <Tab eventKey="Bilfakta" title="Bilfakta">
                <div className="carattr__line">
                  <div className="carattr__name">Varumärke</div>
                  <div className="carattr__value">{data.brand}</div>
                </div>
                <div className="carattr__line">
                  <div className="carattr__name">Model</div>
                  <div className="carattr__value">{data.model}</div>
                </div>
                <div className="carattr__line">
                  <div className="carattr__name">Version</div>
                  <div className="carattr__value">{data.version}</div>
                </div>
                <div className="carattr__line">
                  <div className="carattr__name">Tillverkningsår</div>
                  <div className="carattr__value">{data.modelYear}</div>
                </div>
                <div className="carattr__line">
                  <div className="carattr__name">Växellåda</div>
                  <div className="carattr__value">{data.gearType}</div>
                </div>
                <div className="carattr__line">
                  <div className="carattr__name">Färg</div>
                  <div className="carattr__value">{data.color}</div>
                </div>
                <div className="carattr__line">
                  <div className="carattr__name">Registersnummer</div>
                  <div className="carattr__value">{data.regNumber}</div>
                </div>
                <div className="carattr__line">
                  <div className="carattr__name">Bränslegrupp</div>
                  <div className="carattr__value">{data.fuelType}</div>
                </div>
                <div className="carattr__line">
                  <div className="carattr__name">Miltal</div>
                  <div className="carattr__value">{data.mileage}</div>
                </div>
                <div className="carattr__line">
                  <div className="carattr__name">Miltal</div>
                  <div className="carattr__value">{data.mileage}</div>
                </div>
                <div className="carattr__line">
                  <div className="carattr__name">Miltal</div>
                  <div className="carattr__value">{data.mileage}</div>
                </div>
                <div className="carattr__line">
                  <div className="carattr__name">Miltal</div>
                  <div className="carattr__value">{data.mileage}</div>
                </div>
                <div className="carattr__line">
                  <div className="carattr__name">Miltal</div>
                  <div className="carattr__value">{data.mileage}</div>
                </div>
              </Tab>
              <Tab eventKey="Tillbehör" title="Tillbehör">
                222
              </Tab>
              <Tab eventKey="Utrustning" title="Utrustning">
                333
              </Tab>
              <Tab eventKey="Interiör" title="Interiör">
                333
              </Tab>
              <Tab eventKey="Exteriör" title="Exteriör">
                333
              </Tab>
            </Tabs>
          </div>
          <CarInfo data={data} />
        </div>
      </div>
    );
  }
  return <></>;
};

export default CarAttrs;
