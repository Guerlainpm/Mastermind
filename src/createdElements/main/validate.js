import React from 'react';

class Validate extends React.Component{
  render(){

    return(
      <button type='button' className="bg-color-white color-red-5 bd-color-red-5" onClick={
        this.props.validate
      }>Validate</button>
    );
  }
}

export default Validate;
