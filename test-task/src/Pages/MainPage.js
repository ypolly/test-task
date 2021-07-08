import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Product from "../components/Product";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const MainPage = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [carsNumber, setCarsNumber] = useState(0);
  const [sorted, setSorted] = useState("");

  const sortSelect = (event) => {
    setSorted(event.target.value);
  };

  useEffect(() => {
    if (data.length !== 0) {
      const cars = data.slice();
      switch (sorted) {
        case "lowPrice": {
          setData(cars.sort((a, b) => (a.price > b.price ? 1 : -1)));

          break;
        }
        case "highPrice": {
          setData(cars.sort((a, b) => (a.price < b.price ? 1 : -1)));

          break;
        }
        default:
          break;
      }
    }
  }, [sorted]);

  useEffect(() => {
    setIsLoading(true);
    const apiUrl = "./data/example-data.json";
    fetch(apiUrl, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setData(result.cardsData);
        setCarsNumber(result.cardsData.length);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
      });
  }, [setData]);

  return (
    <>
      <Navbar />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className="page-block">
            <div className="page__row">
              <div className="page__search">
                <FontAwesomeIcon icon={faSearch} className="icon-search" />
                <input
                  type="text"
                  className="search"
                  placeholder="Sök bilar i lager"
                />
              </div>
              <div className="select-block">
                <select name="" id="" className="select" onChange={sortSelect}>
                  <option value="">Sortera på</option>
                  <option value="lowPrice">Lägsta pris</option>
                  <option value="highPrice">Högsta pris</option>
                </select>
                <FontAwesomeIcon icon={faAngleDown} className="icon-arrow" />
              </div>
            </div>
            <div className="page__cards-number">
              {carsNumber} bilar för omgående leverans
            </div>
            <div className="page__cards-block">
              {data.map((i, index) => {
                return <Product key={index} product={i} />;
              })}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MainPage;
