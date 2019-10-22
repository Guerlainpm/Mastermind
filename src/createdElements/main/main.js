import React from 'react';
import ColorChooser from './colorChooser.js'
import Undo from './undo.js';
import Validate from './validate.js';
import BothBoard from './bothBoard.js'

class Main extends React.Component{

  render(){
    return(
      <main className ="d-flex fg-1">
      <div className ="d-flex fd-column-reverse fg-1 boardContainer" >
          {
            this.props.createLines.map((element, index) =>
              <BothBoard key={index} selected={this.props.currentLine === index} index={this.props.index} lineColor={element} result={this.props.result[index]}/>
            )
          }
        </div>
        <div className="colorChooser-undo-validate-container">
          <ColorChooser clicked={this.props.handleClick}/>
          <div className="d-flex jc-space-around undo-validate-buttonContainer">
            <Undo undo={this.props.undo}/>
            <Validate validate={this.props.validate}/>
          </div>
        </div>

      </main>
    );
  }
}

export default Main;
