import React, { Component } from "react"
import { Switch, Route } from "react-router-dom"
import { Home, NotFoundPage } from "./pages"
import { NavBar } from "./components"
import CssBaseline from "@material-ui/core/CssBaseline"

const RouteWithNavBar = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest}>
      <NavBar />
      <Component />
    </Route>
  )
}

export default RouteWithNavBar
