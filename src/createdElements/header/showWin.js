import React from 'react';

class ShowWin extends React.Component  {
  render(){
    return(
      <section className={"showScore" + (this.props.afficheWin ? " show" : "")}>
        <div className="bg-color-cyan-5 block">
          <div className="fermer" onClick={
          this.props.showWin
          }><i className="far fa-times-circle"></i></div>
          <div className="score">Tu as gagné.</div>
          </div>
      </section>
    );
  }
}

export default ShowWin;
