
import './App.css';
import { forwardRef, useImperativeHandle, useLayoutEffect, useRef, useState } from 'react';

function App() {
  const [counted, setCounted] = useState([0, 1, 2, 3, 4]);
  const divRef = useRef();

  // useEffect(() =>{
  useLayoutEffect(() => {
    const now = Date.now();
    while(Date.now() < now + 100);
    divRef.current.divRef.scrollTop = divRef.current.divRef.scrollHeight;
  });

    const handleClick = () => {
    setCounted((c) => [...c, +c.slice(-1) + 1]);
    divRef.current.handleClick();
  };

  return (
    <div className="App">
      <>
        <button onClick={handleClick}>Count {counted.slice(-1)}</button>
        <DisplayCounted counted={counted} ref={divRef} />
        {/* <div ref={divRef} style={{height:'300px', widht: '100px', overflowY: 'scroll'}}>
          {counted.map(c => {
            return <p key={`c-${c}`}>{c}</p>
          })}
        </div> */}
      </>
    </div>
  );
}

export const DisplayCounted = forwardRef(function DisplayCounted({counted}, ref){
  const [rand, setRand] = useState('0.24');
  const divRef = useRef();

  const handleClick = () =>{
    setRand(Math.random().toFixed(2))
  }

  useImperativeHandle(ref, () => ({
    handleClick,
    divRef: divRef.current,
  }));
  return(
    <div ref={divRef} style={{height:'300px', widht: '100px', overflowY: 'scroll'}}>
      {counted.map(c => {
        return <p onClick={handleClick} key={`c-${c}`}>{c} +++ {rand}</p>
      })}
    </div>
  );
});
export default App;
