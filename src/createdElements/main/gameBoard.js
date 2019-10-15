import React from 'react';
import ColorPicked from './colors-picked.js'
class GameBoard extends React.Component{
  createColorPicked(){
    let colorPicked= [];
    for (var i = 0; i < 4; i++) {
      colorPicked.push(<ColorPicked key={i} selected={this.props.selected && this.props.index === i} lineColor={this.props.lineColor[i]}/>)
    }
    return colorPicked;
  }
  render(){
    return(
      <div className ={"gameBoard bg-color-gray-7 d-flex jc-space-around aItems-center"  + (this.props.selected ? " lineSelected":'')}>
        {this.createColorPicked.bind(this)()}
      </div>
    );
  }
}

export default GameBoard;
