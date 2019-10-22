import React from 'react';
import H1 from './h1.js';
import ButtonContainer from './buttonContainer.js';
import ShowScore from './showScore.js';

class Header extends React.Component  {
  render(){
    return(
      <header className="d-flex fd-column aItems-center">
        <H1/>
        <ButtonContainer showScore={this.props.showScore}/>
        <ShowScore afficheScore={this.props.afficheScore} showScore={this.props.showScore} score={this.props.score}/>
      </header>
    );
  }
}

export default Header;
