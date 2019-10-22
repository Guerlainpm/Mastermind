import React from 'react';

class ShowScore extends React.Component  {
  render(){
    return(
      <section className={"showScore" + (this.props.afficheScore ? " show" : "")}>
        <div className="bg-color-cyan-5 block">
          <div className="fermer" onClick={
            this.props.showScore
          }><i className="far fa-times-circle"></i></div>
          <div className="score">Tu as {
            this.props.score
          } points</div>
        </div>
      </section>
    );
  }
}

export default ShowScore;
