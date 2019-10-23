import React from 'react';

class ShowRemplire extends React.Component  {
  render(){
    return(
      <section className={"showScore" + (this.props.afficheRemplire ? " show" : "")}>
        <div className="bg-color-cyan-5 block">
        <div className="fermer" onClick={
          this.props.showRemplire
        }><i className="far fa-times-circle"></i></div>
          <div className="score">Il faut remplire la ligne</div>
        </div>
      </section>
    );
  }
}

export default ShowRemplire;
