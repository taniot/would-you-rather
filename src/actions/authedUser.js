export const SET_USER = 'SET_USER'
export const UNSET_USER = 'UNSET_USER'

export function setAuthedUser(user) {
  return {
    type: SET_USER,
    user,
  }
}

export function unSetAuthedUser() {
  return {
    type: UNSET_USER,
    
  }
}
