import {useState, useEffect} from "react";

const ClickGame = () => {
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(10);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        let timer;
        if (isPlaying && timeLeft > 0) {
            timer = setInterval(() => {
                setTimeLeft((timeLeft) => timeLeft - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            setIsPlaying(false);

        }
        return () => clearInterval(timer);
    }, [isPlaying, timeLeft]);

    const startgame = () => {
        setScore(0);
        setTimeLeft(10);
        setIsPlaying(true);
    }

    const handleClick = () => {
        if (isPlaying) {
            setScore((prev) => prev + 1);

        }
    };

    return (
        <div className="container">
            <h1>Game of Click</h1>
            <p>Tryck på knappen så många gånger du kan!</p>
            {isPlaying ? (
                <>
                    <p> Poäng : {score} </p>
                    <p> Tid kvar : {timeLeft} </p>
                    <button onClick={handleClick} style={{padding: "10px 20px"}}>
                        Klicka här!
                    </button>
                </>
            ) : (
                <>
                    <h2>Ditt resultat: {score}</h2>
                    <button onClick={startgame} style={{padding: "10px 20px"}}>
                        Starta spelet
                    </button>
                </>
            )}
        </div>
    );
};

export default ClickGame;