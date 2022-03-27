import { useState, useEffect, useRef } from "react";
import "../App.css";

export default function Counter() {
  const [count, setCount] = useState(0);

  //need to persist id between renders
  const id = useRef(null);

  const clear = () => {
    window.clearInterval(id.current);
  };

  useEffect(() => {
    id.current = window.setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>{count}</h1>
        <button onClick={clear}>Stop</button>
      </header>
    </div>
  );
}
