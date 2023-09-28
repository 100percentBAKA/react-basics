import './styles.css'
import { useState } from 'react';

function App() {
  const [xTurn, updateTurn] = useState(true);
  const [board, updateBoard] = useState(Array(9).fill(null));
  const [cnt, updateCnt] = useState(0);
  var status = "X Turn";

  if(isWinnerFound(board)) status = "Winner: " + (xTurn ? 'O' : 'X');
  else if(cnt === 9) status = "Draw match";
  else status = (xTurn ? 'X' : 'O') + "'s Turn";

  return (
    <div className='board'>
      <h1> Tic Tac Toe </h1>
      <h2> {status} </h2>
      <div className='board-row'>
        <Square value={board[0]} onSquareClick={() => handleClick(0)} />
        <Square value={board[1]} onSquareClick={() => handleClick(1)} />
        <Square value={board[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className='board-row'>
        <Square value={board[3]} onSquareClick={() => handleClick(3)} />
        <Square value={board[4]} onSquareClick={() => handleClick(4)} />
        <Square value={board[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className='board-row'>
        <Square value={board[6]} onSquareClick={() => handleClick(6)} />
        <Square value={board[7]} onSquareClick={() => handleClick(7)} />
        <Square value={board[8]} onSquareClick={() => handleClick(8)} />
      </div>
      <button className='reset' onClick={reset}>Reset</button>
    </div>
  );

  function handleClick(square) {
    if(!board[square] && !isWinnerFound(board)) {
      board[square] = xTurn ? 'X' : 'O';
      updateBoard(board);
      updateTurn(!xTurn);
      updateCnt(cnt + 1);
    }
  }

  function reset() {
    updateBoard(Array(9).fill(null));
    updateTurn(true);
    updateCnt(0);
  }
}

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function isWinnerFound(board) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  
  for(var i = 0; i < 8; i++) {
    const [a, b, c] = lines[i];
    if(board[a] === board[b] && board[b] === board[c] && board[a]) return true;
  }
  return false;
}

export default App;