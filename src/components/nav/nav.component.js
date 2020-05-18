import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { HeaderContainer, LogoContainer, MenuContainer } from './nav.styles'

class Nav extends Component {
  render() {
    const { authedUser, currentUser } = this.props
    const linkTo = authedUser === null ? '/login' : '/'

    return (
      <HeaderContainer>
        <LogoContainer>
          {authedUser && (
            <span>
              <img
                src={currentUser.avatarURL}
                alt={currentUser.name}
                className='user-avatar'
              />
              {currentUser.name},{' '}
            </span>
          )}
          <Link to={linkTo}>Would You Rather...</Link>
        </LogoContainer>

        {authedUser && (
          <Fragment>
            <MenuContainer>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/add'>New Question</Link>
              </li>
              <li>
                <Link to='/leaderboard'>Leaderboard</Link>
              </li>
              <li>
               Logout
              </li>
            </MenuContainer>
          </Fragment>
  
        
        )}
      </HeaderContainer>
    )
  }
}

const mapStateToProps = ({ users, authedUser }) => {
  const currentUser = users[authedUser]
  return {
    authedUser,
    currentUser,
  }
}

export default connect(mapStateToProps)(Nav)
