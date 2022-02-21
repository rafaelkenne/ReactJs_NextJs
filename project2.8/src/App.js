import './App.css';

import { useCallback, useEffect, useState } from 'react';

const useAsync = (asyncFunction, shouldRun) => {
  const [state, setState] = useState({
    result: null,
    error: null,
    status: 'idle',
  });

  const run = useCallback(() => {
    setState({
      result: null,
      error: null,
      status: 'pending',
    });

    return asyncFunction()
      .then((response) => {
        setState({
          result: response,
          error: null,
          status: 'settled',
        });
      })
      .catch((err) => {
        setState({
          result: null,
          error: err,
          status: 'error',
        });
      });
  }, [asyncFunction]);

  useEffect(() => {
    if (shouldRun) {
      run();
    }
  }, [run, shouldRun]);

  return [run, state.result, state.error, state.status];
};

const fetchData = async () => {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts/');
  const json = await data.json();
  return json;
};

function App() {
  let teste;
  const [posts, setPosts] = useState(null);
  const [reFetchData, result, error, status] = useAsync(fetchData, true);
  const [reFetchData2, result2, error2, status2] = useAsync(fetchData, true);

  useEffect(() => {
    setTimeout(() => {
      reFetchData();
    }, 6000);
  }, [reFetchData]);

  useEffect(() => {
    console.log(result2);
  }, [result2]);

  function handleClick() {
    reFetchData();
  }

  if (status === 'idle') {
    teste = <pre>Nada ececutando</pre>;
    return teste;
  }

  if (status === 'pending') {
    teste = <pre>Loading...</pre>;
    return teste;
  }

  if (status === 'error') {
    teste = <pre>{JSON.stringify(error, null, 2)}</pre>;
    return teste;
  }

  if (status === 'settled') {
    teste = <pre>{JSON.stringify(result, null, 2)}</pre>;
    return teste;
  }

  return <div>{teste}</div>;
}

export default App;
