// Functional Components
// import React, { Fragment } from 'react'; SE PUEDE UTILIZAR EL COMPONENTE FRAGMENT PARA ENVOLVER A UN COMPONENTE
// <Fragment >  
//  <h1>
//  <p>
// </Fragment >

import React from 'react';
import PropTypes from 'prop-types';


//se puede inicializar un estado si no viene desde las PROPS
//Si llega una propiedad omite el valor por defecto y pasa la props que llega
// const PrimeraApp = ({ saludo = 'Hola Mundo' }) => 
const PrimeraApp = ( {saludo, despedida} ) => {
    

    console.log(saludo);

    return (
         <>
            <h1> { saludo } </h1>
            <p> { despedida } </p>
         </>
         
    );
       
}

// PropTypes -> nos sirve para definir el tipado de una propiedad,
// y si es requerida forzosamente en las Props
PrimeraApp.propType = {
    saludo : PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
        desdepedida : 'soy una prop por default'
}

export default PrimeraApp;
