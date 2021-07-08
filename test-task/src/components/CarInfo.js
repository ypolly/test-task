import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker } from '@fortawesome/free-solid-svg-icons'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react';


const CarInfo = ({ withIcons = false, data }) => {

if(data){
  return (
    <>
    <div className="carinfo-block">
      <div className="carinfo">
      <div className="car__location">
        <FontAwesomeIcon icon={faMapMarker} />
        <div className="car__location-name">Möller bil Göteborg</div>
      </div>
      <div className="car__name">
        {data.brand} {data.version}
          </div>
      <div className="car__model">
      {data.version}
          </div>

      <div className="car__attrs">
        <div className="attr">
          <p className="attr__name">Drivmedel</p>
          <p className="attr__value">{data.fuelType}</p>
          <div className="dotted_line"></div>
        </div>
        <div className="attr">
          <p className="attr__name">Växellåda</p>
          <p className="attr__value">{data.gearType}</p>
          <div className="dotted_line"></div>
        </div>
        <div className="attr">
          <p className="attr__name">Miltal</p>
          <p className="attr__value">{data.mileage}</p>
          <div className="dotted_line"></div>
        </div>
        <div className="attr">
          <p className="attr__name">Modellår</p>
          <p className="attr__value">{data.modelYear}</p>
          <div className="dotted_line"></div>
        </div>
      </div>

      <div className="car__attrs">
        <div className="attr">
          <p className="attr__name">Pris</p>
          <p className="attr__value">{data.price} kr</p>
          <div className="dotted_line"></div>
        </div>
        <div className="attr">
          <p className="attr__name">Privatleasing</p>
          <p className="attr__value">{data.leasing ? data.leasing+" kr/ mån " : "Fråga" }</p>
          <div className="dotted_line"></div>
        </div>
      </div>

      <div className="car__supplier">
        DasWeltAuto.
           </div>

      <button className="car__btn-large">
      {withIcons?  <FontAwesomeIcon icon={faCreditCard} /> : ""}
        Interesseanmälan
           </button>

      <div className="btn-row">
        <button className="car__btn">
          {withIcons?  <FontAwesomeIcon icon={faCreditCard} /> : ""}
          Offerförfrågan
          </button>
        <button className="car__btn white">
        {withIcons?  <FontAwesomeIcon icon={faPhoneVolume} /> : ""}
          Kontakta oss
          </button>
      </div>
      </div>
    </div>
          </>  
  )
 }
return <p>Loading..</p>; 
};


export default CarInfo;