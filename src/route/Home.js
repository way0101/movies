import React from 'react'
import {useEffect,useState} from 'react'
import Movie from '../components/Movie'

const Home = () => {
    const [loading, setLoading] = useState(true)
    const [movie, setMovie] = useState([])
  
    const getMovie = async() =>{
      let url = 'https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year'
      let res = await fetch(url)
      let data = await res.json()
      setMovie(data.data.movies)
      setLoading(false)
    }
  
  
    useEffect(() =>{
      getMovie()
    },[])
    console.log(movie)
    return (
      <div className="App">
        {loading ? (<h1>Loading...</h1>) : (<div>{movie.map((item) => <Movie key={movie.id} id={item.id} medium_cover_image={item.medium_cover_image} title={item.title} summary={item.summary} genres={item.genres} />)}</div>)}
      </div>
    );
}

export default Home