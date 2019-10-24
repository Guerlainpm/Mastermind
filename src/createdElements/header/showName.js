import React from 'react';

class ShowName extends React.Component  {
  render(){
    return(
      <section className={"showName" + (this.props.afficheName ? " hide" : "")}>
        <div className="bg-color-cyan-5 block">
          <div className="score d-flex fd-column">
          Entrez un pseudo
            <form onSubmit={this.props.sendInputValue} className="d-flex fd-column">
              <label>
                <input type="text" name="name" value={this.props.value} onChange={this.props.getValue}/>
              </label>
              <input type="submit" value="Envoyer" className="bg-color-white color-red-5 bd-color-red-5" />
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default ShowName;
