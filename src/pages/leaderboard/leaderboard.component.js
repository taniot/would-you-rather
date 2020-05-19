import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Container } from '../pages.styles'
import UserScore from '../../components/userScore/userScore.component'

const LeaderBoard = ({ users }) => {
  return (
    <Container>
      {users.map((user) => (
        <UserScore key={user.id} id={user.id} />
      ))}
    </Container>
  )
}

const mapStateToProps = ({ users }) => {
  const userScore = (user) =>
    Object.keys(user.answers).length + user.questions.length
  return {
    users: Object.values(users).sort((a, b) => userScore(b) - userScore(a)),
  }
}

LeaderBoard.propTypes = {
  users: PropTypes.array.isRequired,
}

export default connect(mapStateToProps)(LeaderBoard)
