import React, { Component } from 'react'
import { handleInitialData } from './actions/shared'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'

import Login from './pages/login/login.component'
import DashBoard from './pages/dashboard/dashboard.component'
import AddQuestion from './pages/add/addQuestion.component'
import LeaderBoard from './pages/leaderboard/leaderboard.component'
import QuestionDetail from './pages/question/question.component'

import './App.css'

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(handleInitialData())
  }
  render() {
    return (
      <div className='App'>
        <Switch>
          <Route path='/login' component={Login}></Route>
          <Route exact path='/' component={DashBoard}></Route>
          <Route path='/add' component={AddQuestion}></Route>
          <Route path='/leaderboard' component={LeaderBoard}></Route>
          <Route path='/questions/:id' component={QuestionDetail}></Route>
        </Switch>
      </div>
    )
  }
}

export default connect()(App)
