import React, { useState, useEffect } from "react";

export default function Time() {
  const [time, setTime] = useState();

  useEffect(() => {
    console.log("se monta el componente Time");
    setInterval(() => {
      const date = new Date().toLocaleTimeString();
      setTime(date);
    }, 1000);
  }, []);

  return <h2>{time}</h2>;
}
