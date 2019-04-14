import React, {useState, useEffect, useReducer} from 'react';
import Filters from '../../components/filters'
import {filterReducer} from '../../redux/hooksReducer/filter'
import {ListStyle, ContainerStyle, LoadingWrap} from './styled'
import ChatWindow from '../chat/ChatWindow'
import { FadingCircle } from "styled-spinkit";
import Loadable from 'react-loadable';
const MovieCard = Loadable({
  loader: () => import('./MovieCard'),
  loading: () => <LoadingWrap><FadingCircle size="60"/></LoadingWrap>
});

function Films(props) {
    const [films, setFilms] = useState(null)
    const [filterFilms, setFilterFilms] = useState(null)
    const [filter, setFilter] = useReducer(filterReducer, { val: 'Rating' });
    const [search, setSearch] = useReducer(filterReducer, { val: '' });
      useEffect(()=> {
        fetch('https://9ifgt840q5.execute-api.eu-west-1.amazonaws.com/dev')
        .then(res => res.json())
        .then(json => {
            setFilms(json)
            updateFilter(json)
        })
        .catch(err => console.log(err))
    }, [filter, search])
    const updateFilter = (json) => {
      const data = json || films
      let filterVal;
      switch(filter.val){
        case 'popularity' :
          filterVal = data.sort((a, b) => b.popularity - a.popularity)
          break;
        default:
          filterVal = data.sort((a, b) => b.vote_average - a.vote_average)
      }
      
      if (search.val !== "") {
        filterVal = filterVal.filter(el => el.title.toLowerCase().includes(search.val.toLowerCase()))
      }
      setFilterFilms(filterVal)
    }
    return (
        <ContainerStyle>
        <Filters data={filterFilms} filter={setFilter} search={setSearch}/>
        {filterFilms ?
        <ListStyle>
          {filterFilms.map(film => {
            return (
              <MovieCard 
                props={props} 
                film={film}
                key={film.movieID}
              />
            )
          })}
        </ListStyle>  
        : <FadingCircle size="60"/>
        }
        <ChatWindow settings={false}/>
       
        </ContainerStyle>

    )
}

export default Films

