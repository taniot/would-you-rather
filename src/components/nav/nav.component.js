import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Logout from '../logout/logout.component'
import { HeaderContainer, LogoContainer, MenuContainer } from './nav.styles'

const Nav = ({ authedUser, currentUser }) => {
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
              <Logout />
            </li>
          </MenuContainer>
        </Fragment>
      )}
    </HeaderContainer>
  )
}

const mapStateToProps = ({ users, authedUser }) => {
  const currentUser = users[authedUser]
  return {
    authedUser,
    currentUser,
  }
}

Nav.propTypes = {
  authedUser: PropTypes.string,
  currentUser: PropTypes.object,
}

export default connect(mapStateToProps)(Nav)
