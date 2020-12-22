import React from 'react';
import './App.css';
import Cronometer from './components/Cronometer';
import Clock from './components/Clock';

class App extends React.Component {

  render() {
    return (
      <>
        <Clock/>
        <Cronometer></Cronometer>
      </>
    )
  }
}

export default App;
