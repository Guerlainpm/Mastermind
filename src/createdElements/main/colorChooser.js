import React from 'react';
import Template from './template-color-chooser.js';
class ColorChooser extends React.Component{
  constructor(props){
    super(props);
    let color =["bg-color-red-2","bg-color-green-2","bg-color-cyan-3","bg-color-blue-2","bg-color-gray-2","bg-color-orange-2"];
    this.template = [];
    for (let i of color) {
      this.template.push(<Template key={this.template.length} clicked={this.props.clicked} color={i}/>)
    }
  }
  render(){
    return(
      <div className ="color-chooser-container d-flex jc-space-around">
        {this.template}
      </div>
    );
  }
}

export default ColorChooser;
