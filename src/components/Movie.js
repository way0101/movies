import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Movie = ({id, medium_cover_image, title, summary, genres}) => {
  return (
    <div>
        <div>
          <h1>
            <Link to={`movie/${id}`}>{title}</Link>
            </h1>
          <img src={medium_cover_image} alt="" />
          <p>{summary}</p>
          <ul>
           {genres?.map((g) => <li key={g}>{g}</li>)}
          </ul>
        </div>
    </div>
  )
}


Movie.propTypes = {
    id:PropTypes.number.isRequired,
    medium_cover_image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired,
    genres:PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie