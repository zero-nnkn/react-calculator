import React from 'react';
import './Calculator.css';

const Calculator = ({display, setDisplay}) => {
    // Handle the click of a button
    const handleClick = (e) => {
        const buttonName = e.target.name;
        if (buttonName === "=") {
            // Set the display to the result of the expression
            // If the expression is invalid, keep the display
            try {
                setDisplay(eval(display).toString());
            } catch(err) {
                setDisplay(display)
            }   
        }
        else if (buttonName === "AC") {
            // Clear the display
            setDisplay("");
        }
        else if (buttonName === "C") {
            // Remove the last character from the display
            setDisplay(display.slice(0, -1));
        }
        else{
            // Add nummber/operator to the display when clicking a button
            // If the display is too long, don't allow more input
            if (display.toString().length > 20) {
                return;
            }
            setDisplay(display.concat(e.target.name));
        }
    }

    return (
        <div className="calculator-container">
            <div className="display">
                {display}
            </div>
            <div className="keypad">
                <button name="AC" onClick={handleClick} className="btn-blue btn-2" id="clear">AC</button>
                <button name="C" onClick={handleClick} className="btn-blue" id="backspace">C</button>
                <button name="+" onClick={handleClick} className="btn-blue" >+</button>
                <button name="1" onClick={handleClick}>1</button>
                <button name="2" onClick={handleClick}>2</button>
                <button name="3" onClick={handleClick}>3</button>
                <button name="-" onClick={handleClick} className="btn-blue" >&ndash;</button>
                <button name="4" onClick={handleClick}>4</button>
                <button name="5" onClick={handleClick}>5</button>
                <button name="6" onClick={handleClick}>6</button>
                <button name="*" onClick={handleClick} className="btn-blue">&times;</button>
                <button name="7" onClick={handleClick}>7</button>
                <button name="8" onClick={handleClick}>8</button>
                <button name="9" onClick={handleClick}>9</button>
                <button name="/" onClick={handleClick} className="btn-blue" >&divide;</button>
                <button name="0" onClick={handleClick} className='btn-2'>0</button>
                <button name="." onClick={handleClick}>.</button>
                <button name="=" onClick={handleClick} className="btn-blue" id="result">=</button>
            </div>
        </div>
    )
}

export default Calculator;