import { useEffect, useState } from "react";
import List from "./List";

function Cronometer() {
  const [time, setTime] = useState("00:00:00.000");
  const [timeReference, setTimeReference] = useState({ timeReference: null });
  const [savePoint, setSavePoint] = useState([]);
  const [key, setKey] = useState(0);
  const [isTurnOn, setIsTurnOn] = useState(false);

  useEffect(() => {
    if (isTurnOn) {
      const interval = setInterval(() => {
        updateTime();
      }, 50);
      return () => clearInterval(interval);
    }
  });

  function updateTime() {
    if (timeReference.timeReference == null) {
      setTimeReference({ timeReference: Date.now() });
    }
    let newHour = Date.now();
    let stopWatch = newHour - timeReference.timeReference;
    let miliseconds = stopWatch % 1000;
    stopWatch = Math.floor(stopWatch / 1000);
    let seconds = stopWatch % 60;
    stopWatch = Math.floor(stopWatch / 60);
    let minutes = stopWatch % 60;
    stopWatch = Math.floor(stopWatch / 60);
    let hours = stopWatch % 60;

    setTime(hours + ":" + minutes + ":" + seconds + "." + miliseconds);
  }

  function startStopWatch() {
    setIsTurnOn(!isTurnOn);
  }

  function stopCronometer() {
    setTime("00:00:00.000");
    setTimeReference({ timeReference: null });
    setIsTurnOn(false);
    setSavePoint([]);
    localStorage.clear();
    setKey(0);
  }

  function savePointFunction() {
    localStorage.setItem(key, time);
    setKey(key + 1);
    parseLocalStorageIntoList();
  }

  function parseLocalStorageIntoList() {
    let list = [];
    for (let i = 0; i < localStorage.length; i++){
        list.push(localStorage.getItem(i));
    }
    setSavePoint(list);
  }

  return (
    <>
      <div>{time}</div>
      <button onClick={startStopWatch}>Iniciar / pausar</button>
      <button onClick={stopCronometer}>Parar</button>
      <button onClick={savePointFunction}>Salvar</button>
      <List list={savePoint}></List>
    </>
  );
}

export default Cronometer;
