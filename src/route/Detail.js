import React from 'react'
import {useEffect,useState} from 'react'
import { useParams, Link } from 'react-router-dom'

const Detail = () => {
  const [loading, setLoading] = useState(true)
  const [getMovie, setGetMovie] = useState([])
  const {id} = useParams();
  console.log(id);

  const getId = async() =>{
    let url = `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    let res = await fetch(url)
    let data = await res.json()
    setLoading(false)
    setGetMovie(data.data)
  }

  console.log(getMovie.movie)



  useEffect(() => {
    getId()
  },[])

  return (
    <div>
      <Link to="/">
        <button>뒤로</button>  
      </Link>
      {loading ? (<div>Loading...</div>) : (<div>
        <img src={getMovie.movie?.medium_cover_image} alt="" />
        <h1>{getMovie.movie?.title}</h1>
        <p>{getMovie.movie?.description_full}</p>
        {getMovie.movie.genres.map((item)=>(
          <span>{item}</span>
        ))}
      </div>)}

    </div>
  )
}

export default Detail