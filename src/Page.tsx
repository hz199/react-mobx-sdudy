import * as React from 'react'
import { Router, Route, Switch, Redirect } from 'react-router-dom' // BrowserRouter HashRouter
import App from './App'
import Page404 from './views/404'
import Page403 from './views/403'
import { history } from './store'

const Page = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/app" />} />
        <Route path="/app" component={App} />
        <Route exact path="/404" component={Page404} />
        <Route exact path="/403" component={Page403} />
        <Route render={() => <Redirect to="/404" />} />
      </Switch>
    </Router>
  )
}

export default Page
