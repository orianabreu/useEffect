import React, { useState, useEffect } from "react";
import ApiRequest from "./components/ApiRequest/ApiRequest";
import Time from "./components/Time/Time";

//efectos secundarios: peticiones a APIs (HttpRequests), setIntervals-setTimeOuts...

function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    console.log("renderizado...");
    document.title = `Total de clicks:${count}`;
  }, [count]) // la función solo se ejecuta cuando cambie count

  // useEffect(() => {
  //   console.log("renderizado...");
  //   document.title = `Total de clicks:${count}`;
  // }) // si no añado array de dependcias, la función se ejecuta cada vez que se actualice el componente

  // useEffect(() => {
  //   console.log("renderizado...");
  //   document.title = `Total de clicks:${count}`;
  // }, []) // si dejo el array de dependencias vacío, la función del useEffect se ejecuta solo la primera vez que se monta el componente

  const handleClick = () => {
    setCount(count + 1);
  }
  const handleChange = (e) => {
    setInputValue(e.target.value);
  }

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={handleClick}>+</button>
      <input value={inputValue} onChange={handleChange}/>

      <Time />
      <ApiRequest />
    </div>
  );
}

export default App;
