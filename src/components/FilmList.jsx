import React from 'react'
import Film from './Film.jsx'

class FilmList extends React.Component {
  render() {

    let filmNodes = this.props.data.map((film) => {
      return(
        // return another array with a film in it
        // need to have a key assigned to items when dealing with an array of data
        <Film title={film.title} key={film.id}>
          {film.showtimes}
        </Film>
        );
    });

    return (
      <div className="film-list">
        {filmNodes}
      </div>
      )
  }
}

export default FilmList