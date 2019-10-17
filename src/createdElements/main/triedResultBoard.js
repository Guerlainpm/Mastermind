import React from 'react';

class TriedResultBoard extends React.Component{
  constructor(props){
    super(props);
    this.template = [];
    for (var i = 0; i < 4; i++) {
      this.template.push(<div className="indicator bd-color-gray-4" key={i}></div>)
    }
  }
  render(){
    return(
      <div className ="triedResultBoard bg-color-red-7 ">
        {this.template}
      </div>
    );
  }
}

export default TriedResultBoard;
