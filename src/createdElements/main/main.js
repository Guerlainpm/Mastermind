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
      composition:["bg-color-red-2","bg-color-green-2","bg-color-cyan-3","bg-color-blue-2"],
      compositionRandom:[]
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
    this.undo = this.undo.bind(this);
    this.validate = this.validate.bind(this);
    this.compare = this.compare.bind(this)
    this.random = this.random.bind(this)
  }

  handleClick(color){
    this.game[this.state.line][this.state.index] = color;
    this.setState({
      index: this.state.index < 3 ? this.state.index + 1 : this.state.index,
    });
  }

  undo(){
    if (this.game[this.state.line][this.state.index] === "") {
      this.game[this.state.line][this.state.index-1] = "";
    }
    this.game[this.state.line][this.state.index] = "";
    // si l'etat est vide ( === "" && index diff 0)
    this.setState({
      index: this.state.index === 0 ? this.state.index : this.state.index -1,
    });
  }

  compare(){
    let bienPlacer = 0;
    let malPlacer = 0;
    for (let i = 0; i < this.state.composition.length; i++) {
      if (this.state.composition[i]===this.game[this.state.line][i]) {
        bienPlacer++;
        malPlacer--;
      }
    for (var y = 0; y < this.game[this.state.line].length; y++) {
      if (this.game[this.state.line][i].includes(this.state.composition[y])) {
       malPlacer++;
     }
    }

    }
    console.log(bienPlacer,malPlacer);
  }
  validate(){
    if (this.game[this.state.line][this.state.index +1] === "") {
      console.log("Veuillez remplir la ligne en entier")
    }
    else if (this.game[this.state.line][this.state.index] === "") {
      console.log("Veuillez remplir la ligne en entier")
    }
    else if (this.state.line !== 9) {
      this.setState({
        line:this.state.line +1,
        index:0
      });
    }
    this.compare();
  }

  random(){
    let allColors = ["bg-color-red-2","bg-color-green-2","bg-color-cyan-3","bg-color-blue-2","bg-color-gray-2","bg-color-orange-2"];
    console.log(Math.floor(Math.random() * allColors.length));
  }

  createLines() {
      let lines = [];
      for (let i = 0; i < 10; i++) {
        lines.push(<BothBoard key={i} selected={this.state.line === i} index={this.state.index} lineColor={this.game[i]}/>)
      }
      return lines.reverse();
  }

  render(){
    this.random();
    return(
      <main className ="d-flex fg-1">
        <div className ="d-flex fd-column fg-1 boardContainer">
          {this.createLines.bind(this)()}
        </div>

        <div className="colorChooser-undo-validate-container">
          <ColorChooser clicked={this.handleClick}/>
          <div className="d-flex jc-space-around undo-validate-buttonContainer">
            <Undo undo={this.undo}/>
            <Validate validate={this.validate}/>
          </div>
        </div>

      </main>
    );
  }
}

export default Main;
