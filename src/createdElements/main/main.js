import React from 'react';
import BothBoard from './bothBoard.js';
import ColorChooser from './colorChooser.js'
import Undo from './undo.js';
import Validate from './validate.js';

class Main extends React.Component{
  render(){

    return(
      <main className ="d-flex fg-1">
        <div className ="d-flex fd-column fg-1 boardContainer">
          <BothBoard/>
          <BothBoard/>
          <BothBoard/>
          <BothBoard/>
          <BothBoard/>
          <BothBoard/>
          <BothBoard/>
          <BothBoard/>
          <BothBoard/>
          <BothBoard/>
        </div>

        <div className="colorChooser-undo-validate-container">
          <ColorChooser/>
            <div className="d-flex jc-space-around undo-validate-buttonContainer">
              <Undo/>
              <Validate/>
            </div>
        </div>

      </main>
    );
  }
}

export default Main;
