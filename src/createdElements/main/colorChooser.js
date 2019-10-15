import React from 'react';
import Template from './template-color-chooser.js';
class ColorChooser extends React.Component{
  render(){

    return(
      <div className ="color-chooser-container d-flex jc-space-around">
      <Template color="bg-color-red-2"></Template>
      <Template color="bg-color-green-2"></Template>
      <Template color="bg-color-cyan-3"></Template>
      <Template color="bg-color-blue-2"></Template>
      <Template color="bg-color-gray-2"></Template>
      <Template color="bg-color-orange-2"></Template>
      </div>
    );
  }
}

export default ColorChooser;
