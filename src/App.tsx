import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css'

import Inputs from './inputs/Inputs';

function App() {
  return (
    <div className="container-fluid">
      <div className='row'>
        <div className='col-12 col-lg-4 p-3 rounded bg-light bg-secondary'>
          <h1 className='pb-3'>Calculadora RENACYT</h1>
          <Inputs />
        </div>
        <div className='col-12 col-lg-8 bg-primary'>
        </div>
      </div>
    </div>
  );
}

export default App;
