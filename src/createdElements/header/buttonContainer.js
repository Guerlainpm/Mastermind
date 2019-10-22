import React from 'react';
import SoloButton from './buttonContainerElements/soloButton.js';
import CoopButton from './buttonContainerElements/coopButton.js';
import Score from './buttonContainerElements/score.js';
import Regle from './buttonContainerElements/regle.js';

class ButtonContainer extends React.Component{
  render(){

    return(
      <div className="d-flex jc-space-around  buttonContainer">
        <SoloButton/>
        <CoopButton/>
        <Score showScore={this.props.showScore}/>
        <Regle/>
      </div>
    );
  }
}

export default ButtonContainer;
