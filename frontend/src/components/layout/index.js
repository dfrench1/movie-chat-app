import React, {useState, useEffect} from 'react'
import Header from './Header'
import {BackgroundStyle, ContentWrap} from './styled'
function Layout ({children, user}) {
  const [lazy, setLazy] = useState("https://s3-eu-west-1.amazonaws.com/ecommerce-assets-dev/film-bg-min.jpg")
  const [opacity, setOpacity] = useState(0)
  useEffect(() => {
    setLazy("https://s3-eu-west-1.amazonaws.com/ecommerce-assets-dev/film-bg.jpg")
    setOpacity(1)
  }, [])
  return (
    <section>
        <BackgroundStyle 
          src={lazy}
          opacity={opacity}
        />
   
        <Header 
          user={user}
        />
        <ContentWrap>
          {children}
        </ContentWrap>
    </section>
  )
}

export default Layout