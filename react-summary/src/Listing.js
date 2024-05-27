import './styles/Listing.css'
import Timer from './timer';



function CatListing ({ Name, Preis, imageURL}) {
        return (   
         <div className="cat-list"> 
             <img src= {imageURL}
             alt="alternativtext" style={{width: '300px', height: 'auto'}}/>
             <p>Rasse: {Name} </p>
             <p>Preis: €{Preis}</p>
             < Timer />
             <div style={{border: '7px solid black'}}/>            
         </div>
     )
 }



export default CatListing