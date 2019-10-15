import React from 'react';

class Template extends React.Component {
  render() {

    return (
      <div className={"color-chooser-indicator " + this.props.color} onClick={() => {
        console.log(this.props.color);
      }}></div>
    );
  }
}
export default Template;
