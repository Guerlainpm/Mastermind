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
      index:0,
    }
    this.game = [
      ["","","",""],
      ["","","",""],
      ["","","",""],
      ["","","",""],
      ["","","",""],
      ["","","",""],
      ["","","",""],
      ["","","",""],
      ["","","",""],
      ["","","",""]
    ]
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(color){
    this.game[this.state.line][this.state.index] = color;
    this.setState({
      index: this.state.index < 3 ? this.state.index + 1 : this.state.index,
    });
    console.log(this.state.bgColor);
  }

  createLines() {
      let lines = [];
      for (var i = 0; i < 10; i++) {
        lines.push(<BothBoard key={i} selected={this.state.line === i} index={this.state.index} lineColor={this.game[i]}/>)
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
          <ColorChooser clicked={this.handleClick}/>
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
