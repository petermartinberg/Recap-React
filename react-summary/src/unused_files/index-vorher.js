import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CatListing from '../Listing';
import katzen from "../katzen"


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div id="kopfzeile"> <h1>Eine kleine Auswahl von Rassekatzen</h1>
    <div className='container'>
      {katzen.map((cat, index) =>
        <CatListing key={index} Name={cat.Namen} Preis={cat.Preis} imageURL={cat.img}></CatListing>
      )}
    </div>
  </div>
);









