import React, { Component, Fragment } from 'react'
import QuestionSwitch from '../questionSwitch/questionSwitch.component'
class QuestionList extends Component {
  render() {
    const { list } = this.props

    return (
      <Fragment>
        {list.map((question, id) => (
            <QuestionSwitch key={question} id={question} list={true} />

        ))}
      </Fragment>
    )
  }
}

export default QuestionList