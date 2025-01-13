import "./app.css";

function Home() {
    return (
        <div className="container">
            <h1>TestaReact</h1>
            <p>Testar lite React</p>
            <button onClick={() => alert('Tittut')}>Se vad som händer om du klickar här!</button>
        </div>
    );
}

export default Home;