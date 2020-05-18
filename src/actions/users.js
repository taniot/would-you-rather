export const GET_USERS = 'GET_USER'

export function getUsers(users) {
  return {
    type: GET_USERS,
    users,
  }
}
