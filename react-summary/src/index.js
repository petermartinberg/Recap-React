import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import katzen from './katzen';
import Suche from './suche';
import CatListing from './Listing';

const App = () => {
  // Status für die ausgewählte Rasse  
  const [selectedBreed, setSelectedBreed]  = useState('');

  // Handler für die Auswahländerung
  const handleBreedChange = (event) => {
    setSelectedBreed(event.target.value);
  };

  // Filtern der Katzen auf der ausgewählten Rasse basierend
  const filteredCats = selectedBreed
  ? katzen.filter(cat => cat.Namen === selectedBreed)
  : katzen;
  // Für die .map-Funktion braucht React einen führenden unique Key, da sonst die Array-Elemente 
  // nicht eindeutig identifiziert werden können. Dieser wird immer mit key={index} angegeben!
  return (
    <div>
        <Suche selectedBreed={selectedBreed} handleBreedChange={handleBreedChange} katzen={katzen} />
        <div className='container'>
            {filteredCats.map((cat, index) => (
                <CatListing key={index} Name={cat.Namen} Preis={cat.Preis} imageURL={cat.img} />
            ))}
        </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
// Hier wurde alle Logik einfach in eine Variable, die ab Zeile 8 alles beinhaltet als Komponente gepackt!
root.render(<App />)