import { useState } from "react";
import katzen from "../katzen.js";

function Suchfeld() {
    const [yourSearch, setYourSearch] = useState("");

    const handleOnChange = (event) => {
        setYourSearch(event.target.value);
    };

    const selectedKatze = katzen.find(katze => katze.Namen === yourSearch);    

    return (
        <div className="container2">
            <p>Hallo, welche Rasse suchen Sie?</p>
            <select onChange={handleOnChange} value={yourSearch}>
                <option value="" >Bitte auswählen</option>
                {katzen.map((katze, index) => (
                    <option key={index} value={katze.Namen}>
                        {katze.Namen}
                    </option>
                ))}
            </select>

            {yourSearch ? (
                <div>
                    <p>Ausgewählte Rasse:</p>
                    <p>{selectedKatze.Namen}</p>
                    <img src={selectedKatze.img} alt={selectedKatze.Namen} />
                </div>
            ) : (
                <div>
                    <p>Alle Rassen:</p>
                    {katzen.map((katze, index) => (
                        <div key={index}>
                            <p>{katze.Namen}</p>
                            <img src={katze.img} alt={katze.Namen} />
                        </div>
                    ))}
                </div>        
            )}  

        </div>        
    );
}

export default Suchfeld;
