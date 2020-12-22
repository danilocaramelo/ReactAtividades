import React from 'react';
import List from './List';

class Cronometer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            time: "00:00:00.000",
            timeReference: null,
            savePoint: [],
            isTurnOn: false
        }
        this.updateTime = this.updateTime.bind(this);
        this.startStopWatch = this.startStopWatch.bind(this);
        this.stopCronometer = this.stopCronometer.bind(this);
        this.savePointFunction = this.savePointFunction.bind(this);
    }

    componentDidUpdate() {
        const interval = setInterval(() => {
            this.updateTime();
        },50);
        return () => clearInterval(interval);
    }

    updateTime() {
        if(this.state.isTurnOn) {
            if(this.state.timeReference == null) {
                this.setState({timeReference: Date.now()});
            }
            let newHour = Date.now();
            let stopWatch = newHour - this.state.timeReference;
            let miliseconds = stopWatch % 1000;
            stopWatch = Math.floor(stopWatch / 1000);
            let seconds = stopWatch % 60;
            stopWatch = Math.floor(stopWatch / 60);
            let minutes = stopWatch % 60;
            stopWatch = Math.floor(stopWatch / 60);
            let hours = stopWatch % 60;
      
            this.setState({time: `${hours}:${minutes}:${seconds}.${miliseconds}`});
        }
    }

    startStopWatch() {
        this.setState({isTurnOn: !this.state.isTurnOn})
    }

    stopCronometer() {
        this.setState({
            time: "00:00:00.000",
            timeReference: null,
            isTurnOn: false,
            savePoint: [],
        })
    }

    savePointFunction() {
        this.state.savePoint.push(this.state.time);
    }

    render() {
        return(
            <>
                <div>{this.state.time}</div>
                <button onClick={this.startStopWatch}>Iniciar / pausar</button>
                <button onClick={this.stopCronometer}>Parar</button>
                <button onClick={this.savePointFunction}>Salvar</button>
                <List list={this.state.savePoint}></List>
            </>
        );
    }
    
}

export default Cronometer;