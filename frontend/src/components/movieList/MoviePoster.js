import React from 'react'
import { PosterStyle } from './styled'

const MoviePoster = ({film}) => {
  return (
    <PosterStyle>
    <img 
      alt="moviePoster"
      src={`https://s3-eu-west-1.amazonaws.com/ecommerce-assets-dev/${film.poster}`} 
      width={'200px'}
      height={'300px'}
    />
  </PosterStyle>
  )
}

export default MoviePoster