import React from 'react';

class Score extends React.Component{
  render(){

    return(
      <button type='button' className="bg-color-white color-red-5 bd-color-red-5" onClick={
        this.props.showScore
      }>Score</button>
    );
  }
}

export default Score;
