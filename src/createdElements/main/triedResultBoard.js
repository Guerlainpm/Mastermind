import React from 'react';

class TriedResultBoard extends React.Component{
  render(){

    return(
      <div className ="triedResultBoard bg-color-red-7">
        <section className="d-flex fd-column jc-space-around">
          <div className="indicator bd-color-gray-4"></div>
          <div className="indicator bd-color-gray-4"></div>
        </section>
        <section className="d-flex fd-column jc-space-around">
          <div className="indicator bd-color-gray-4"></div>
          <div className="indicator bd-color-gray-4"></div>
        </section>
      </div>
    );
  }
}

export default TriedResultBoard;
