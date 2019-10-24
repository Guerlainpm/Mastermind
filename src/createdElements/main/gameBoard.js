import React from 'react';
import ColorPicked from './colors-picked.js'
class GameBoard extends React.Component{


  render(){
    return(
      <div className ="gameBoard d-flex jc-space-around aItems-center">
        {
          this.props.lineColor.map((element, index) =>
            <ColorPicked key={index} selected={this.props.selected && this.props.index === index} lineColor={element}/>
          )
        }
      </div>
    );
  }
}

export default GameBoard;
