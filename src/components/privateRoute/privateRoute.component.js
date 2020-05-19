import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location },
          }}
        />
      )
    }
  />
)

const mapStateToProps = ({ authedUser }) => ({
  isAuthenticated: authedUser !== null,
})

PrivateRoute.propTypes = {
  component: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
}

export default connect(mapStateToProps)(PrivateRoute)
