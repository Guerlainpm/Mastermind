import React from 'react';

class ColorChooser extends React.Component{
  render(){

    return(
      <div className ="color-chooser-container d-flex jc-space-around">
        <div className ="color-chooser-indicator bg-color-red-3"></div>
        <div className ="color-chooser-indicator bg-color-green-2"></div>
        <div className ="color-chooser-indicator bg-color-cyan-4"></div>
        <div className ="color-chooser-indicator bg-color-blue-4"></div>
        <div className ="color-chooser-indicator bg-color-gray-3"></div>
        <div className ="color-chooser-indicator bg-color-orange-3"></div>
      </div>
    );
  }
}

export default ColorChooser;
