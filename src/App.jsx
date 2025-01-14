import {BrowserRouter as Router, Routes,Route,Link} from "react-router-dom";
import Home from "./Home";
import About from "./about.jsx";
import "./app.css";
import DarkModeToggle from "./DarkModeToggle.jsx";
import ClickGame from "./gameofclick.jsx";

function App() {
    return (
        <Router>
            <DarkModeToggle>
            <h1> Dark mode Switch</h1>
            </DarkModeToggle>
            <div style={{textAlign: 'center', marginTop: '20px'}}>
                <nav style={{marginBottom: '20px'}}>
                    <Link to="/" style={{margin: '10px'}}>Hem</Link>
                    <Link to="/Kul fakta" style={{margin: "0 10px"}}>Kul fakta</Link>
                    <Link to="/gameofclick" style={{margin: "0 10px"}}>Game of Click</Link>
                </nav>
                <Routes>
                    <Route path="/gameofclick" element={<ClickGame/>}/>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/Kul fakta" element={<About/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;