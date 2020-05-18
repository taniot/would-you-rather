import React, { Component } from 'react'
import { handleInitialData } from './actions/shared'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'

import Login from './pages/login/login.component'
import DashBoard from './pages/dashboard/dashboard.component'
import AddQuestion from './pages/add/addQuestion.component'
import LeaderBoard from './pages/leaderboard/leaderboard.component'
import QuestionDetail from './pages/question/question.component'
import NotFound from './components/notfound/notFound.component'
import Nav from './components/nav/nav.component'

import PrivateRoute from './components/privateRoute/privateRoute.component'
import './App.css'

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(handleInitialData())
  }
  render() {
    return (
      <div className='App'>
        <Nav />
        <Switch>
          <Route path='/login' component={Login}></Route>
          <PrivateRoute exact path='/' component={DashBoard}></PrivateRoute>
          <PrivateRoute path='/add' component={AddQuestion}></PrivateRoute>
          <PrivateRoute
            path='/leaderboard'
            component={LeaderBoard}
          ></PrivateRoute>
          <PrivateRoute
            path='/questions/:id'
            component={QuestionDetail}
          ></PrivateRoute>
          <Route component={NotFound}></Route>
        </Switch>
      </div>
    )
  }
}

export default connect()(App)
