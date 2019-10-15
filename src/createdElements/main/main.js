import React from 'react';
import BothBoard from './bothBoard.js';
import ColorChooser from './colorChooser.js'
import Undo from './undo.js';
import Validate from './validate.js';

class Main extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      line:0,
      index:0
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){

  }

  createLines() {
      let lines = [];
      for (var i = 0; i < 10; i++) {
        lines.push(<BothBoard key={i} selected={this.state.line === i} test={this.handleClick} index={this.state.index}/>)
      }
      return lines.reverse();
  }

  render(){

    return(
      <main className ="d-flex fg-1">
        <div className ="d-flex fd-column fg-1 boardContainer">
          {this.createLines.bind(this)()}
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
