import React from 'react'
import FilmList from './FilmList.jsx'


class FilmBox extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      data: [{
        id: 1,
        title: "Sausage Party",
        showtimes: "1900, 2000, 2100"
      },
      {
        id: 2,
        title: "Cafe Society",
        showtimes: "1600, 1930"
      },
      {
        id: 3,
        title: "Morgan",
        showtimes: "2000"
      },
      {
        id: 4,
        title: "The 9th Life of Louis Drax",
        showtimes: "1700, 2200"
      },
      {
        id: 5,
        title: "Naam Hai Akira",
        showtimes: "1630, 2030"
      },
      {
        id: 6,
        title: "Equity",
        showtimes: "1745, 2015"
      },
      {
        id: 7,
        title: "Things to Come",
        showtimes: "1830, 2145"
      }]
    }
  }

  render(){
    return (
      <div className="film-box">
        <h1>UK, Films Opening This Week</h1>
        <FilmList data={this.state.data} />
      </div>
      )
  }

}

export default FilmBox;