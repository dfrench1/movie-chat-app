import React from "react";
import {FilterWrap} from './styled'

const Filters = ({ filter, search }) => {
  return (
    <FilterWrap>
    <select onChange={(e)=>{
        filter({ type: "setFilter", val: e.target.value })  
    }}>
      <option value="rating">Rating</option>
      <option value="popularity">Popularity</option>
    </select>
    <input
      placeholder="search by title"
      onChange={(e)=>{
          search({ type: "search", val: e.target.value })  
      }} />
    </FilterWrap>
  );
};

export default Filters


