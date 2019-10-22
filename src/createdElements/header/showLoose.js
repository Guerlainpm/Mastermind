import React from 'react';

class ShowLoose extends React.Component  {
  render(){
    return(
      <section className={"showScore" + (this.props.afficheLoose ? " show" : "")}>
        <div className="bg-color-cyan-5 block">
          <div className="fermer" onClick={
            this.props.showLoose
          }><i className="far fa-times-circle"></i></div>
          <div className="score">Pauvre fou. Tu a perdu</div>
        </div>
      </section>
    );
  }
}

export default ShowLoose;
