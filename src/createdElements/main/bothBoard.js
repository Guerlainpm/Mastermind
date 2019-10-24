import React from 'react';
import GameBoard from './gameBoard.js'
import TriedResultBoard from './triedResultBoard.js'

class BothBoard extends React.Component{
  render(){

    return(
      <div className ={"d-flex bothBoard bg-color-gray-7"  + (this.props.selected ? " lineSelected":'')}>
        <GameBoard index={this.props.index} lineColor={this.props.lineColor}/>
        <TriedResultBoard result={this.props.result}/>
      </div>
    );
  }
}

export default BothBoard;
