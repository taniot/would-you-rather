import { SET_USER, UNSET_USER } from '../actions/authedUser'

function authedUser(state = null, action) {
  switch (action.type) {
    case SET_USER:
      return action.user
    case UNSET_USER:
      return null
    default:
      return state
  }
}

export default authedUser
