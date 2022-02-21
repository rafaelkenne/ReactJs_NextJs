
import React, { Suspense, useState } from 'react';
import './App.css';
//import LazyComponent from './templates/Home/lazy-component';

const loadComponent = () => {
  console.log('import carregando');
  return import('./templates/Home/lazy-component');
} 
const LazyComponent = React.lazy(loadComponent);

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <p>Oi</p>
      <button onMouseOver={loadComponent} onClick={() => setShow((s) => !s)}>Show {show ? 'Está On' : 'Está Off'}</button>
      <Suspense fallback={<p>Carregando ...</p>}>
        {show && <LazyComponent />}
      </Suspense>
    </div>
  );
}

export default App;
