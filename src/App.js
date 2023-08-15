import React, { useState } from 'react';
import Calculator from './components/Calculator';

const App = () => {
    const [display, setDisplay] = useState("");
    
    return (
        <div className="App">
            <h1>Simple Calculator</h1>
            <Calculator display={display} setDisplay={setDisplay}/>
        </div>
    );
}

export default App;