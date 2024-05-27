import React, { useState, useEffect } from "react";
// Hier muss die Funktion für den Timer rein
function Timer() {
    const initialZeit = Math.floor(Math.random() * 7200);
    const [timeLeft, setTimeLeft] = useState(initialZeit);
    useEffect(() => {
        if (timeLeft <= 0) {
            return;
        }
        const interval = setInterval(() => {
            setTimeLeft(prevTime => prevTime - 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [timeLeft]);
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    return (
        <div>
            <p id='verfuegbar'>Verfügbar bis: {minutes}m {seconds}s</p>
        </div>
    );
};

export default Timer