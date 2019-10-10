import React from 'react';
import H1 from './h1.js';
import ButtonContainer from './buttonContainer.js';
class Header extends React.Component  {
  render(){

    return(
      <header className="d-flex fd-column aItems-center">
        <H1/>
        <ButtonContainer/>
      </header>
    );
  }
}

export default Header;
