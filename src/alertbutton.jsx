import "react";

function AlertButton(){
    const showAlert = () => {
        alert("Tittut");
    };
    return (
        <button onClick={showAlert}>Se vad som händer om du klickar här!</button>
    );
}

export default AlertButton;