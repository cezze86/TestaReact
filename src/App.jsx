import "react";

function App() {
    return (
        <div style={{textAlign: 'center', marginTop:'20px'}}>
            <h1>Hej TestaReact</h1>
            <p>Testar lite React</p>
        <button onClick={() => alert('Tittut')}>Se vad som händer om du klickar här!</button>
        </div>
    );
}

export default App;