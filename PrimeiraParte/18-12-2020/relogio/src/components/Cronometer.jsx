import {useEffect, useState} from 'react';
import List from './List';

function Cronometer() {
  const [count, setCount] = useState(0);
  const [savePoint, setSavePoint] = useState([])
  const [isTurnOn, setIsTurnOn] = useState(false);

  useEffect(() => {
    if(isTurnOn) {
        const interval = setInterval(() => {
            setCount(count => count + 1)
          },10);
          return () => clearInterval(interval);
    }
  })

  function handleClick() {
      setIsTurnOn(!isTurnOn);
  }

  function stopCronometer() {
      setCount(0);
      setIsTurnOn(false);
      setSavePoint([]);
  }

  function savePointFunction() {
      setSavePoint(savePoint.concat(count));
  }

    return(
        <>
            <div>{count}</div>
            <button onClick={handleClick}>Iniciar</button>
            <button onClick={stopCronometer}>Parar</button>
            <button onClick={savePointFunction}>Salvar</button>
            <List list={savePoint}></List>
        </>
    );
}

export default Cronometer;