import React, { useEffect, useState } from 'react';
import Gallery from "../components/Gallery";
import Navbar from "../components/Navbar";
import CarInfo from "../components/CarInfo";
import CarAttrs from "../components/CarAttrs";
import LastOpened from '../components/LastOpened';


const SinglePage = ( ) => {
     const [data, setData] = useState([]);
     const [isLoading, setIsLoading] = useState(true);
     const [error, setError] = useState('');
 
     
       useEffect(() => {
         const apiUrl = './data/example-data.json';
         fetch(apiUrl,{
             headers : { 
               'Content-Type': 'application/json',
               'Accept': 'application/json'
              }
           }
           )
           .then((res) => res.json())
           .then((result) => {
             setData(result);
             setIsLoading(false);
             }).catch((e) => {
                 setIsLoading(false);
                 setError('fetch failed');
               });
           }, []);
 
    return(
        <>
        <Navbar/>
        <div className="top-widget-block">
            <button className="btn-back"> Tillbaka till sökresultat</button>
            <div className="top-widget">
            { isLoading ? (
        <div>Loading ...</div>
      ) : 
      <>
            <Gallery data={data.specificCar}/>
            <CarInfo data={data.specificCar} withIcons="true" />
            </>
        }
            </div>
        </div>
        { isLoading ? (
        <div>Loadingkk ...</div>
      ) : <>
       <CarAttrs data={data.specificCar}/>
       <LastOpened data={data.cardsData}/>
       </>
        }
        </>
    )
};

export default SinglePage;