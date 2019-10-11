import React from 'react';

class GameBoard extends React.Component{
  render(){

    return(
      <div className ="gameBoard bg-color-gray-7 d-flex jc-space-around aItems-center">
        <div className="colors-picked bd-color-gray-4"></div>
        <div className="colors-picked bd-color-gray-4"></div>
        <div className="colors-picked bd-color-gray-4"></div>
        <div className="colors-picked bd-color-gray-4"></div>
      </div>
    );
  }
}

export default GameBoard;
