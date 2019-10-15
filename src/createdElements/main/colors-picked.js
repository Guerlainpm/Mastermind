import React from 'react';

class ColorsPicked extends React.Component{

  render(){
    return(
      <div className={"colors-picked" + (this.props.selected ? " bd-color-red-4 ":' bd-color-gray-4 ') + this.props.lineColor} ></div>
    );
  }
}

export default ColorsPicked;
