import React, { Component } from 'react'
import { handleInitialData } from './actions/shared'
import { connect } from 'react-redux'


import Login from './pages/login/login.component'
import DashBoard from './pages/dashboard/dashboard.component'
import LeaderBoard from './pages/leaderboard/leaderboard.component'
import addQuestion from './pages/add/addQuestion.component'
import Question from './pages/question/question.component'
import NotFound from './components/notfound/notFound.component'

import Nav from './components/nav/nav.component'
import LoadingBar from 'react-redux-loading-bar'

import { Route, Switch } from 'react-router-dom'
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
      <LoadingBar />
        <Nav />
        <Switch>
          <Route path='/login' component={Login}/>
          <PrivateRoute exact path='/' component={DashBoard}/>
          <PrivateRoute path='/leaderboard' component={LeaderBoard}/>
          <PrivateRoute path='/add' component={addQuestion}/>
          <PrivateRoute path='/questions/:id' component={Question}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
    )
  }
}

export default connect()(App)
