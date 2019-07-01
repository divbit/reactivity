import React from 'react';
import './App.css';

class Cell extends React.Component {

  state = {
    number: 1
  }

  render() {
    return (<div onClick={e => {
      this.setState({number: (this.state.number + 1) % 5})
    }} className={`cell ${this.props.isInitial ? 'initial' : ''}`}>{this.state.number !== 0 && this.state.number}</div>);
  }
}

function App() {
  return (
    <div className="App">

        <Cell number={3} isInitial />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
    </div>
  );
}

export default App;
