import React from 'react';


class Bienvenu extends React.Component  {
  render(){
    return(
      <h2 className='color-red-3 textSize-lg bienvenue'>
        Bienvenue {this.props.value}
      </h2>
    );
  }
}

export default Bienvenu;
