import React from 'react';

class PointResult extends React.Component{

  render(){
    return(
      <div className={"indicator bd-color-gray-4 " + (this.props.result ? this.props.result : "")}></div>
    );
  }
}

export default PointResult;
