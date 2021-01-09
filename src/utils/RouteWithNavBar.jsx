import React from "react"
import { Route } from "react-router-dom"

const RouteWithNavBar = ({ navbar: NavBar, component: Component, ...rest }) => {
  return (
    <Route {...rest}>
      <NavBar />
      <Component />
    </Route>
  )
}

export default RouteWithNavBar
