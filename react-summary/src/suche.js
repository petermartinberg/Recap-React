import React from 'react';
import './index.css';

const Suche = ({ selectedBreed, handleBreedChange, katzen}) => (
    <div id='kopfzeile'>
        <h1>Eine kleine Auswahl von Rassekatzen</h1>
        <label>
            Wählen Sie eine Rasse:
            <select value={selectedBreed} onChange={handleBreedChange}>
                <option value=''>Alle Rassen im Überblick</option>
                {katzen.map((cat, index) => (
                    <option key={index} value={cat.Namen}>{cat.Namen}</option>
                ))}
            </select>
        </label>
        <p></p>
    </div>
);

export default Suche;