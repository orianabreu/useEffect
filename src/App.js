import React, { useState, useEffect, useRef } from "react";
import ApiRequest from "./components/ApiRequest/ApiRequest";
import Time from "./components/Time/Time";

//efectos secundarios: peticiones a APIs (HttpRequests), setIntervals-setTimeOuts...

function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");
  //const [renderCount, setRenderCount] = useState(0);
  const renderCount = useRef(1);
  console.log(renderCount);

  const inputFocus = useRef();
  
  useEffect(() => {
    console.log("renderizado...");
    document.title = `Total de clicks:${count}`;
    //setRenderCount(prevRenderCount => prevRenderCount + 1) puede generar bucles infinitos
    renderCount.current = renderCount.current + 1;
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

  const focus = () => {
    console.log("focus...");
    inputFocus.current.focus();
  }

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={handleClick}>+</button>
      <hr />
      <input ref={inputFocus} value={inputValue} onChange={handleChange}/>
      <button onClick={focus}>focus</button>
      <p>Componente renderizado: {renderCount.current} veces</p>
      <Time />
      <ApiRequest />
    </div>
  );
}

export default App;
