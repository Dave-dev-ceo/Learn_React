import React from 'react';
import ReactDOM from 'react-dom';
//import PrimeraApp from './PrimerApp';

import './index.css';
import CounterApp from './CounterApp';

const divRoot = document.querySelector('#app');

// ReactDOM.render(<PrimeraApp saludo ='esta es una propiedad ' /> , divRoot);
ReactDOM.render(<CounterApp value = { 5 } /> , divRoot);