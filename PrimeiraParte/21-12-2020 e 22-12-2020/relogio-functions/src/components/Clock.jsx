import { useEffect, useState } from "react";

function Clock() {
    const [clock, setClock] = useState({hours: "00", minutes: "00", seconds: "00"})

    useEffect(() => {
        const interval = setInterval(() => {
            const time = new Date();
            let hours = time.getHours().toLocaleString();
            let minutes = time.getMinutes().toLocaleString();
            let seconds = time.getSeconds().toLocaleString();
            setClock({hours: hours, minutes: minutes, seconds: seconds})
        }, 1000)
        return () => clearInterval(interval);
    })

    return(
        <>
            <div>{clock.hours + ":" + clock.minutes + ":" + clock.seconds}</div>  
        </>
    );
}

export default Clock;