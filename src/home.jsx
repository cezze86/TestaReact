import React from "react";

function Home() {
    return (
        <div style={{textAlign: 'center', marginTop:'20px'}}>
            <h1>TestaReact</h1>
            <p>Testar lite React</p>
            <button onClick={() => alert('Tittut')}>Se vad som händer om du klickar här!</button>
        </div>
    );
}

export default Home;