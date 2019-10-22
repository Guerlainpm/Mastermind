import React from 'react';
import './App.css';
import './style.min.css'
import Header from './createdElements/header/header.js'
import Main from './createdElements/main/main.js'
import BothBoard from './createdElements/main/bothBoard.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      afficheScore: false,
      score:0,
      line:0,
      index:0,
      compositionRandom:this.random(),
      game : [
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
      ],
      result : [
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        []
      ]
    }
    this.showScore = this.showScore.bind(this);
    this.calculScore = this.calculScore.bind(this)
    this.handleClick = this.handleClick.bind(this);
    this.undo = this.undo.bind(this);
    this.validate = this.validate.bind(this);
    this.compare = this.compare.bind(this);
    this.random = this.random.bind(this)
    }

  handleClick(color){
    this.state.game[this.state.line][this.state.index] = color;
    this.setState({
      index: this.state.index < 3 ? this.state.index + 1 : this.state.index,
    });
  }

  undo(){
    let index = ((this.state.index === 0) || ((this.state.index === 3) && (this.state.game[this.state.line][this.state.index] !== "")) ) ? this.state.index : this.state.index - 1;

     if (this.state.game[this.state.line][this.state.index] === "") {
         this.state.game[this.state.line][this.state.index - 1] = "";
     } else {
         this.state.game[this.state.line][this.state.index] = "";
     }
     this.setState({
         index: index,
     })
  }

  compare(){
    let bienPlacer = 0;
    let malPlacer = 0;
    let arr = this.state.compositionRandom.map(e => e);
    for (let i = 0; i < this.state.game[this.state.line].length; i++) {
      let choice = this.state.game[this.state.line][i];
      if (arr.includes(choice)) {
        arr[arr.indexOf(choice)] = "";
        malPlacer++
      }
    }
    for (let i = 0; i < this.state.game[this.state.line].length; i++) {
      let choice = this.state.game[this.state.line][i];
      if (this.state.compositionRandom[i]===choice) {
        bienPlacer++;
        malPlacer--;
      }
    }
   return [bienPlacer,malPlacer]
  }

  validate(){
      if (this.state.game[this.state.line][this.state.index +1] === "") {
        alert("Veuillez remplir la ligne en entier")
      }
      else if (this.state.game[this.state.line][this.state.index] === "") {
        alert("Veuillez remplir la ligne en entier")
      }
      else{
         if (this.state.line !== 9) {
        this.setState({
          line:this.state.line +1,
          index:0
        });
      }
      this.rightWrongPlaceResult();
    }
    console.log(this.state.compositionRandom)
  }

  rightWrongPlaceResult(){
    let compareResult = this.compare();
    let newResult = [...this.state.result]
    for (var i = 0; i < compareResult[0]; i++) {
      newResult[this.state.line].push("bg-color-green-2")
    }
    for (var i = 0; i < compareResult[1]; i++) {
      newResult[this.state.line].push("bg-color-orange-2")
    }
    this.setState({
      result: newResult
    });

    console.log(newResult);
    if (compareResult[0] === 4) {
      alert("gg")

      this.setState({
        line:0,
        index:0,
        compositionRandom: this.random(),
        game : [
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
        ],
        result : [
          [],
          [],
          [],
          [],
          [],
          [],
          [],
          [],
          [],
          []
        ]
      });
      this.calculScore()
    }
    if (this.state.line === 9 && compareResult[0] !== 4) {
     alert("Pauvre fou tu a perdu");
     this.setState({
       line:0,
       index:0,
       compositionRandom: this.random(),
       game : [
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
       ],
       result : [
         [],
         [],
         [],
         [],
         [],
         [],
         [],
         [],
         [],
         []
       ]
     });
     this.calculScore("-")
   }
  }


  random(){
    let allColors = ["bg-color-red-2","bg-color-green-2","bg-color-cyan-3","bg-color-blue-2","bg-color-gray-2","bg-color-orange-2"];
    let randomColorCHoosed=[];
    for (var i = 0; i < 4; i++) {
      randomColorCHoosed.push(allColors[Math.floor(Math.random() * allColors.length)]);
    }
    return randomColorCHoosed;
  }

  calculScore(signe){
  if (signe === "-") {
    this.setState((state) => {
      return {score: state.score - 3}
    });
  }
  else {
    this.setState((state) => {
      return {score: this.state.score + (9 - this.state.line)};
    });
  }
}

  showScore() {
  this.setState({
    afficheScore: !this.state.afficheScore
  });
}

  render(){
    return (
    <div className="App d-flex fd-column">
      <Header score={this.state.score} afficheScore={this.state.afficheScore} showScore={this.showScore}/>
      <Main result={this.state.result} undo={this.undo} validate={this.validate} createLines={this.state.game} handleClick={this.handleClick} score={this.score} currentLine={this.state.line} index={this.state.index}/>
    </div>
  );}

}

export default App;
