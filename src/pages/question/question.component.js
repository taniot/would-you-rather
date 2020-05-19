import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionSwitch from '../../components/questionSwitch/questionSwitch.component'
import { Container } from '../pages.styles'

class QuestionDetail extends Component {
  render() {
    const { id } = this.props
    return (
      <Container>
        <QuestionSwitch id={id} />
      </Container>
    )
  }
}

function mapStateToProps({ questions }, { match }) {
  const { id } = match.params

  return {
    id,
  }
}

export default connect(mapStateToProps)(QuestionDetail)
