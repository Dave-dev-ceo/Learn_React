import React, { useState }from "react";
import PropTypes from 'prop-types';


const CounterApp = ( { value } ) => {
    
    
    const [counter , setCounter] = useState(value);
    console.log(counter);


    // Funcion que se ejecuta en cuanto esuche el evento Onclick en el boton
    const handleAdd = () => {
        setCounter( counter + 10); 
        // setCounter( (c) => c + 1 );
        console.log(counter);
    }

    const handleReset = () => {
        setCounter ( (counter) => counter = value);
    }

    const handleSubtract = () => {
        setCounter (counter - 10);
    }
    return (
        <>
            <h1> CounterApp</h1>
            <h2> { counter } </h2>

            <button onClick = { handleAdd } > + 1 </button>
            <button onClick = { handleReset }> RESET </button>
            <button onClick = { handleSubtract }> - 1 </button>
        </>
    )
}

CounterApp.propType = {
    value : PropTypes.number
}


export default CounterApp;