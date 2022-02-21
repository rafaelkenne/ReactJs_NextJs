
import { useEffect, useState } from 'react';
import './App.css';

const useMediaQuery = (queryValue) => {
  const [match, setMatch] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const matchMedia = window.matchMedia(queryValue);

    const handleChange = () =>{
      if(!isMounted) return;
      setMatch(Boolean(matchMedia.matches));
    }
    matchMedia.addEventListener('change', handleChange);
    setMatch(!!matchMedia.matches);

    return() => {
      isMounted = false;
      matchMedia.removeEventListener('change', handleChange);
    }
  },[queryValue])

  return match;
}

function App() {
  const huge = useMediaQuery('(min-width: 980px)');
  const big = useMediaQuery('(max-width: 979px) and (min-width: 768px)');
  const medium = useMediaQuery('(max-width: 767px) and (min-width: 321px)');
  const small = useMediaQuery('(max-width: 321px)');

  const background = huge ? 'green' : big ? 'red' : medium ? 'yellow' : small ? 'purple' : null;
  return (
    <div className="App">
      
      <div style={{fontSize: '60px', background}}>Oi</div>
    </div>
  );
}

export default App;
