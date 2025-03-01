import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  // Handler functions
  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={increment}>➕ Add</button>{' '}
      <button onClick={decrement}>➖ Decrease</button>
    </>
  );
}

export default App;

