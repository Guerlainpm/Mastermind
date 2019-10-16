import React from 'react';

class Undo extends React.Component{

  render(){
    return(
        <button type='button' className="bg-color-white color-red-5 bd-color-red-5" onClick={
          this.props.undo
        }>Undo</button>
    );
  }
}

export default Undo;
