import React from 'react';
import GameBoard from './gameBoard.js'
import TriedResultBoard from './triedResultBoard.js'

class BothBoard extends React.Component{
  render(){

    return(
      <div className ="d-flex bothBoard">
        <GameBoard/>
        <TriedResultBoard/>
      </div>
    );
  }
}

export default BothBoard;
