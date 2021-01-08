import React, { Component } from "react"
import { Switch, Route } from "react-router-dom"
import {
  Album,
  Blog,
  Checkout,
  Home,
  SignIn,
  SignInSide,
  SignUp,
  StickyFooter,
  Pricing,
  NotFoundPage,
  Dashboard,
} from "./pages"

const App = () => {
  return (
    <React.Fragment>
      <div className="App container">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/album" component={Album} exact />
          <Route path="/blog" component={Blog} exact />
          <Route path="/checkout" component={Checkout} exact />
          <Route path="/pricing" component={Pricing} exact />
          <Route path="/signup" component={SignUp} exact />
          <Route path="/signin" component={SignIn} exact />
          <Route path="/signin-side" component={SignInSide} exact />
          <Route path="/sticky-footer" component={StickyFooter} exact />
          <Route path="/dashboard" component={Dashboard} exact />
          <Route component={NotFoundPage} exact />
        </Switch>
      </div>
    </React.Fragment>
  )
}
export default App
