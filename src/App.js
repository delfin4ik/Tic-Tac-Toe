import React from 'react';
import './App.css';
import Board from './Board';


class App extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}



// ========================================

// ReactDOM.render(
//   <Game />,
//   document.getElementById('root')
// );

export default App;
