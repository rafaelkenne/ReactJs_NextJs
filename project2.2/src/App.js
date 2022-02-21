//import { createContext, useState } from 'react';
import './App.css';
import {AppContext} from './contexts/AppContext/'
import {Div} from './Components/Div';
function App() {
  return (
    <AppContext>
      <Div />
    </AppContext>
  );
}

export default App;