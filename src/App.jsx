import {BrowserRouter as Router, Routes,Route,Link} from "react-router-dom";
import Home from "./Home";
import About from "./about.jsx";
import "./app.css";
import DarkModeToggle from "./DarkModeToggle.jsx";

function App() {
    return (
        <Router>
            <DarkModeToggle>
            <h1> Dark mode Switch</h1>
            </DarkModeToggle>
            <div style={{textAlign: 'center', marginTop:'20px'}}>
                <nav style={{marginBottom:'20px'}}>
                    <Link to="/" style={{marginRight:'10px'}}>Hem</Link>
                    <Link to="/om mig" style={{margin: "0 10px"}}>Om mig</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Om mig" element={<About />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;