import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import QuestionPreview from '../question/questionPreview.component'


class QuestionSwitch extends Component {
  render() {
    const { isAnswered, id, list, question } = this.props

    if (!question) {
      return <Redirect to='/404' />
    }

    switch (true) {
      case list === true:
        return <QuestionPreview id={id} />

      case isAnswered === true:
      return 2
      case isAnswered === false:
        return 3

      default:
        return <div>Default</div>
    }
  }
}

const mapStatetoProps = ({ questions, users, authedUser }, { id }) => {
  const user = users[authedUser]
  const question = questions[id]
  const userAnswers = Object.keys(user.answers)

  let isAnswered = false
  if (question) {
    if (userAnswers.includes(question.id)) {
      isAnswered = true
    }
  }
  return {
    isAnswered,
    question,
  }
}

export default connect(mapStatetoProps)(QuestionSwitch)
