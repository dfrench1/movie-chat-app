import React from 'react'
import {HeaderStyle} from './styled'
import {Link} from 'react-router-dom'
import {Home} from 'styled-icons/fa-solid/Home'
import {Chat} from 'styled-icons/crypto/Chat'
import {Film} from 'styled-icons/fa-solid/Film'

const Header = (props) => {
  return(
    <HeaderStyle>
    <Link to="/">
      <Home 
        size="30"
        color="white"
        style={{padding:'0.5em'}}
      />
    </Link>
    <Link to="/movieList">
      <Film
        size="30"
        color="white"
        style={{padding:'0.4em'}}
      />
    </Link>
    <Link to="/chat">
      <Chat
        size="30"
        color="white"
        style={{padding:'0.4em'}}
      />
    </Link>

    </HeaderStyle>
  )
}

export default Header