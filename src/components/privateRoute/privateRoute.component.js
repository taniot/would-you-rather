import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated ? (
        <Component {...props} />
      ) : (
      
        <Redirect
        to={{
          pathname: "/login",
          state: { from: props.location }
        }}
      />
      )
    }
  />
)

const mapStateToProps = ({ authedUser }) => ({
  isAuthenticated: authedUser !== null,
})

export default connect(mapStateToProps)(PrivateRoute)
