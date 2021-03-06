import React from 'react'
import { Route, Switch, Redirect, RouteComponentProps } from 'react-router-dom'
import routeConfig, { RouteConfig } from './config'

const Protected = function Protected(Comp: React.ComponentType<RouteComponentProps>, item: RouteConfig) {
  return (props: RouteComponentProps): React.ReactElement => {
    // TODO 处理一些额外的事件
    const { meta } = item
    document.title = meta.title || 'TEST'
    return <Comp {...props} />
  }
}

const RouterApp = (props: RouteComponentProps) => {
  return (
    <Switch>
      {routeConfig.map((item: RouteConfig) => (
        <Route
          key={item.path}
          path={item.path}
          exact
          render={() => Protected(item.component, item)(props)}
        ></Route>
      ))}
      <Route render={() => <Redirect to="/404" />} />
    </Switch>
  )
}

export default RouterApp