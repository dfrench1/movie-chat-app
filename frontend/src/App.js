import React, {useEffect} from "react";
import { Route, Switch } from "react-router-dom";
import Layout from './components/layout'
import NoMatch from './pages/noMatch'
import {GlobalStyle} from './styled'
import routes from './routes'

function App() {
  useEffect(() => {

  }, [])

  return (
    <Layout>
      <GlobalStyle />
      <Switch>
      {routes.map(({ path, exact, component: Component, ...rest }) => (
        <Route key={path} path={path} exact={exact} render={(props) => (
          <Component {...props} {...rest} />
        )} />
      ))}
      <Route render={(props) => <NoMatch {...props} /> } />
      </Switch>
    </Layout>
    )
}

export default App;
