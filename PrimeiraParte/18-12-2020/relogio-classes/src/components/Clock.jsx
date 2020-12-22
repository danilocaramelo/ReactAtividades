import React from 'react';

class Clock extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            hours: "00",
            minutes: "00",
            seconds: "00",
        }
        this.update = this.update.bind(this);
    }

    componentDidMount() {
        const interval = setInterval(() => {
            this.update();
        }, 1000)
        return () => clearInterval(interval);
    }

    update() {
        const time = new Date();
            let hours = time.getHours().toLocaleString();
            let minutes = time.getMinutes().toLocaleString();
            let seconds = time.getSeconds().toLocaleString();
            this.setState({
                hours: hours,
                minutes: minutes,
                seconds: seconds,
            })
    }

    render() {
        return(
            <div>{this.state.hours + ":" + this.state.minutes + ":" + this.state.seconds}</div>
        );
    }
}



export default Clock;