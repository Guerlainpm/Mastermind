import React from 'react';
import PointResult from './pointResult'

class TriedResultBoard extends React.Component{

  render(){
    return(
      <div className ="triedResultBoard bg-color-red-7 ">

      <PointResult result={this.props.result[0]} key={0}/>
      <PointResult result={this.props.result[1]} key={1}/>
      <PointResult result={this.props.result[2]} key={2}/>
      <PointResult result={this.props.result[3]} key={3}/>

      </div>
    );
  }
}

export default TriedResultBoard;
