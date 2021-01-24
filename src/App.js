import React, { Component } from "react"
import { Switch, Route } from "react-router-dom"
import {
  Album,
  Blog,
  Checkout,
  Form,
  Home,
  SignIn,
  SignInSide,
  SignUp,
  StickyFooter,
  Pricing,
  NotFoundPage,
  Dashboard,
  ImageShow,
} from "./pages"
import usePageTracking from "./utils/usePageTracking"

const App = () => {
  usePageTracking()
  return (
    <React.Fragment>
      <div className="App container">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/album" component={Album} exact />
          <Route path="/blog" component={Blog} exact />
          <Route path="/checkout" component={Checkout} exact />
          <Route path="/form" component={Form} exact />
          <Route path="/image-show" component={ImageShow} exact />
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
