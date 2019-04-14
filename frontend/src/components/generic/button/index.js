import React from "react";
import { ButtonStyle } from "./styled";
import { Route } from 'react-router-dom'
import {addMovie} from '../../../redux/actions'
import { connect } from 'react-redux'

const Button = ({ text, color, background, redirect, method }) => (
  redirect ? 
  <Route
    render={({ history }) => (
      <ButtonStyle 
        color={color} 
        background={background}
        onClick={() => history.push({
          pathname: method.pathname,
          data: method.data
        })}>
        {text}
      </ButtonStyle>
    )}
  />
  : 
  <ButtonStyle 
    color={color} 
    background={background}
    onClick={() => {
      const payload = {
        id: method.data.id,
        title: method.data.title,
        price: (Math.random()*9).toFixed(2)
      };
      addMovie(payload);
    }}
    >
    {text}
  </ButtonStyle>
);

const mapDispatchToProps = (dispatch) => {
  return {
    addMovie: (movie) => dispatch(addMovie(movie))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Button)
