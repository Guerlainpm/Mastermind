import React from 'react';
import H1 from './h1.js';
import ButtonContainer from './buttonContainer.js';
import ShowScore from './showScore.js';
import ShowRemplire from './showRemplire.js';
import ShowWin from './showWin.js';
import ShowLoose from './showLoose.js';

class Header extends React.Component  {
  render(){
    return(
      <header className="d-flex fd-column aItems-center">
        <H1/>
        <ButtonContainer showScore={this.props.showScore}/>
        <ShowScore afficheScore={this.props.afficheScore} showScore={this.props.showScore} score={this.props.score}/>
        <ShowRemplire afficheRemplire={this.props.afficheRemplire} showRemplire={this.props.showRemplire}/>
        <ShowWin afficheWin={this.props.afficheWin} showWin={this.props.showWin}/>
        <ShowLoose afficheLoose={this.props.afficheLoose} showLoose={this.props.showLoose}/>
      </header>
    );
  }
}

export default Header;
