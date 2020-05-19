import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container } from '../pages.styles'

class LeaderBoard extends Component {
  render() {
    const { users } = this.props
    return (
      <Container>
        {users.map((user) => (
          <div key={user.id} id={user.id}>
            {user.id}
          </div>
        ))}
      </Container>
    )
  }
}

const mapStateToProps = ({ users }) => {
  const userScore = (user) =>
    Object.keys(user.answers).length + user.questions.length
  return {
    users: Object.values(users).sort((a, b) => userScore(b) - userScore(a)),
  }
}

export default connect(mapStateToProps)(LeaderBoard)
