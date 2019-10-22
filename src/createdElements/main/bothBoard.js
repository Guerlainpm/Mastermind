import React from 'react';
import GameBoard from './gameBoard.js'
import TriedResultBoard from './triedResultBoard.js'

class BothBoard extends React.Component{
  render(){

    return(
      <div className ="d-flex bothBoard">
        <GameBoard index={this.props.index} selected={this.props.selected} lineColor={this.props.lineColor}/>
        <TriedResultBoard result={this.props.result}/>
      </div>
    );
  }
}

export default BothBoard;
