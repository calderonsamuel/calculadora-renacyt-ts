import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Inputs from './inputs/Inputs';

function App() {
  return (
    <div className="container">
      <div className='row'>
        <div className='col-4 bg-secondary'>
          <Inputs />
        </div>
        <div className='col-8 bg-primary'>
        </div>
      </div>
    </div>
  );
}

export default App;
