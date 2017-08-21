import React from 'react'

class Film extends React.Component {
  render(){
      return (
        <div className="film">
        <h2 className="filmTitle">{this.props.title}</h2>
        <h4>{this.props.children}</h4>
        </div>
        );
  }
}

export default Film;