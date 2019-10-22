import React from 'react';
import Score from './buttonContainerElements/score.js';
import Regle from './buttonContainerElements/regle.js';

class ButtonContainer extends React.Component{
  render(){

    return(
      <div className="d-flex jc-space-around  buttonContainer">
        <Score showScore={this.props.showScore}/>
        <Regle/>
      </div>
    );
  }
}

export default ButtonContainer;
