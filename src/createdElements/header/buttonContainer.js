import React from 'react';
import SoloButton from './buttonContainerElements/soloButton.js';
import CoopButton from './buttonContainerElements/coopButton.js';
import Score from './buttonContainerElements/score.js';
import Regle from './buttonContainerElements/regle.js';

class ButtonContainer extends React.Component{
  render(){
    let divStyle = {
      width: "100%"
}
    return(
      <div className="d-flex jc-space-around"style = {divStyle}>
        <SoloButton/>
        <CoopButton/>
        <Score/>
        <Regle/>
      </div>
    );
  }
}

export default ButtonContainer;
