import React, { Component, Fragment } from 'react'

class QuestionList extends Component {
  render() {
    const { list } = this.props

    return (
      <Fragment>
        {list.map((question, id) => (
         <div key={id}>Question Switch</div>
        ))}
      </Fragment>
    )
  }
}

export default QuestionList