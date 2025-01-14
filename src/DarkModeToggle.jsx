import {useState, useEffect} from "react";

const DarkModeToggle = () => {
    const [darkMode, setDarkMode] = useState(
        () => localStorage.getItem("mode") === "dark"
        
    );
    
    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark");
            localStorage.setItem("mode", "dark");
        } else {
            document.body.classList.remove("dark");
            localStorage.setItem("mode", "light");
        }
    }, [darkMode]);
    
    return (
        <button
            onClick={() => setDarkMode((prevMode) => !prevMode)}
            style={{
                padding: "10px 20px",
                fontSize: "1rem",
                cursor: "pointer",
                borderRadius: "5px",
                border: "none",
                background: darkMode ? "#333" : "#ddd",
                color: darkMode ? "#fff" : "#000",
            }}
        >
            {darkMode ? "Ändra till ljust läge" : "Ändra till mörkt läge"}
        </button>
    );
    
};

export default DarkModeToggle;