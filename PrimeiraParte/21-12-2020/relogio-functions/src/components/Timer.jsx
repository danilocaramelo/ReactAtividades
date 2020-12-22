import { useEffect, useState } from "react";

function Timer() {

    const [seconds, setSeconds] = useState(0);
    const [timer, setTimer] = useState("00:00");
    const [isTurnOn, setIsTurnOn] = useState(false);

    useEffect(() => {
        if(isTurnOn) {
            const interval = setInterval(() => {
                countDown();
                updateTimer();
              },1000);
              return () => clearInterval(interval);
        }
        updateTimer();
    });

    function timerSum() {
        if (!isTurnOn) {
            setSeconds(seconds + 60);
        }
    }

    function timerMinus() {
        if (!isTurnOn && seconds > 59) {
            setSeconds(seconds - 60);
        }
        if (!isTurnOn && seconds < 59) {
            setSeconds(0);
        }
    }

    function updateTimer() {
        let minutesTimer = Math.floor(seconds / 60);
        let secondsTimer = seconds % 60;
        setTimer(minutesTimer + ":" + secondsTimer);
    }

    function countDown() {
        if (seconds > 0) {
            setSeconds(seconds - 1);
        }
    }

    function turnOn() {
        setIsTurnOn(!isTurnOn);
    }

    function stopTimer() {
        setSeconds(0);
        setIsTurnOn(false);
    }

    return(
        <>
            <div>{timer}</div>
            <button onClick={timerSum}>+</button>
            <button onClick={timerMinus}>-</button>
            <button onClick={turnOn}>Iniciar / Pausar</button>
            <button onClick={stopTimer}>Parar</button>
        </>
    );
}

export default Timer;