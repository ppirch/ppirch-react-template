import React from "react"
import { Route } from "react-router-dom"
import { NavBar } from "./components"

const RouteWithNavBar = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest}>
      <NavBar />
      <Component />
    </Route>
  )
}

export default RouteWithNavBar
