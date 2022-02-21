import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, useCallback } from 'react';
import P from 'prop-types';
//import { Component } from 'react/cjs/react.production.min';

// const eventFn = () => {
//   console.log('h1 clicado');
// };

const Button = React.memo(function Button({ incrementButton }) {
  return <button onClick={() => incrementButton(10)}>+</button>;
});

Button.propTypes = {
  incrementButton: P.func,
};

function App() {
  const [contador, setContador] = useState(0);
  // const [contador2, setContador2] = useState(0);

  // fazer um cache da função. Função não mudará
  const incrementCounter = useCallback((num) => {
    setContador((c) => c + num);
  }, []);

  // //componentDidUpdate - executa toda vez que o componet atualiza
  // useEffect(() => {
  //   console.log('componentDidUpdate');
  // });

  // //componentDidMount - executa 1  vez
  // useEffect(() => {
  //   console.log('componentDidMount');
  //   document.querySelector('h1')?.addEventListener('click', eventFn);

  //   //componentWillUmount - limpeza
  //   return () => {
  //     document.querySelector('h1')?.removeEventListener('click', eventFn);
  //   };
  // }, []);

  // //Com dependência - executa tpda vez que a dependência mudar
  // useEffect(() => {
  //   console.log('Contador1: ', contador, 'Contador2: ', contador2);
  // }, [contador, contador2]);

  // function addContador() {
  //   setContador((cont) => cont + 1);
  // }
  // const [reverse, setReverse] = useState(false);
  // const reverseClass = reverse ? 'reverse' : '';
  // const handleClick = () => {
  //   setReverse(!reverse);
  // };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Teste 2</h1>
        <div>Contador 1: {contador}</div>
        {/* <button onClick={incrementCounter}>+</button> */}
        <Button incrementButton={incrementCounter} />

        {/*<img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />
        <button onClick={handleClick}>Reverse {reverseClass}</button> */}
      </header>
    </div>
  );
}

// class App extends Component {
//   state = {
//     reverse: false,
//   };

//   handleClick = () => {
//     const { reverse } = this.state;
//     this.setState({ reverse: !reverse });
//   };

//   render() {
//     const { reverse } = this.state;
//     const reverseClass = reverse ? 'reverse' : '';
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />
//           <button onClick={this.handleClick}>Reverse {reverseClass}</button>
//         </header>
//       </div>
//     );
//   }
// }

export default App;
