//import logo from './logo.svg';
import './App.css';
import { useReducer } from 'react';

const globalState = {
  title: 'O título',
  body: 'O corpo',
  counter: 0,
};

const reducer = (state, action) => {
  switch(action.type){
    case 'muda':{
      console.log('Chamou muda com', action.payload);
      return {...state, title: action.payload};
    }
    case 'inverter':{
      console.log('Chamou iverter');
      const {title} = state;
      return {...state, title: title.split('').reverse().join('')};
    }
  }

  console.log('Nenhuma Action encontrada')
  return {...state};
}

function App() {
  const [state, dispatch] = useReducer(reducer, globalState);
  
  const {counter, title, body} = state;
  return (
    <div className="App">
      <h1>{title} {counter}</h1>
      <button onClick={() => dispatch({type: 'muda', payload: new Date().toLocaleString('pt-BR')})}>Click</button>
      <button onClick={() => dispatch({type: 'inverter'})}>Inverter</button>
      <button onClick={() => dispatch({type: 'Qualquer coisa'})}>Sem Action</button>
    </div>
  );
}

export default App;
