import React from 'react';
import { MovieDesc, CardStyle, PosterContainer} from './styled'
import MoviePoster from './MoviePoster';
import MovieButton from './MovieButtons'

const MovieCard = ({film, props}) => {
    return (
        <CardStyle
        >
          <PosterContainer>
            <MoviePoster
              film={film}  
            />
            <section>
              <MovieDesc>{film.desc}</MovieDesc>
              <MovieButton props={props} film={film}/>
            </section>
          </PosterContainer>
        </CardStyle>
     
    );
};

export default MovieCard;