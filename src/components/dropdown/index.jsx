import React from 'react'
import * as DropDown from './styles'

export const TransactionDropDown = ({ handleSortBy }) => {
  return (
    <DropDown.SortDropDown>
      <DropDown.SortOptions onClick={() => handleSortBy('oldest')}>
        <span>Date ( oldest to newest)</span>
      </DropDown.SortOptions>
      <DropDown.SortOptions onClick={() => handleSortBy('newest')}>
        <span>Date ( newest to oldest)</span>
      </DropDown.SortOptions>
      <DropDown.SortOptions onClick={() => handleSortBy('lowest')}>
        <span>Amount (lowest to higest)</span>
      </DropDown.SortOptions>
      <DropDown.SortOptions onClick={() => handleSortBy('highest')}>
        <span>Amount (higest to lowest)</span>
      </DropDown.SortOptions>
    </DropDown.SortDropDown>
  )
}

export const NavDropDown = props => {
  return (
    <DropDown.NavDropDown>
      <DropDown.NavOptions onClick={() => props.history.push('/dashboard/createadmin')}>
        <img src={require('../../assets/images/createadmin.svg')} alt='Create new admin user' />
        <span> Create new admin user </span>
      </DropDown.NavOptions>
      <DropDown.NavOptions onClick={() => props.history.push('/dashboard/adminsettings')}>
        <img src={require('../../assets/images/settings.svg')} alt='settings' />
        <span> Settings </span>
      </DropDown.NavOptions>
      <DropDown.NavOptions onClick={props.handleLogoutUser}>
        <img src={require('../../assets/images/logout.svg')} alt='logout' />
        <span> Logout </span>
      </DropDown.NavOptions>
    </DropDown.NavDropDown>
  )
}

export const JobsDropDown = ({ handleFilterBy }) => {
  return (
    <DropDown.SortDropDown>
      <DropDown.SortOptions onClick={() => handleFilterBy('completed')}>
        <span>Completed Jobs</span>
      </DropDown.SortOptions>
      <DropDown.SortOptions onClick={() => handleFilterBy('accepted')}>
        <span>Accepted Jobs</span>
      </DropDown.SortOptions>
      <DropDown.SortOptions onClick={() => handleFilterBy('unaccepted')}>
        <span>Unaccepted Jobs</span>
      </DropDown.SortOptions>
    </DropDown.SortDropDown>
  )
}
export const ConnectDropDown = ({ email, toggleDropDown, handleStartNewChat, ...props }) => {
  return (
    <DropDown.ConnectDropDown {...props}>
      <a href={`mailto:${email}`} target='_top'>
        <DropDown.ConnectOptions onClick={toggleDropDown} {...props}>
          <span>Via Email</span>
        </DropDown.ConnectOptions>
      </a>
      <DropDown.ConnectOptions onClick={handleStartNewChat} {...props}>
        <span>Via Live Chat</span>
      </DropDown.ConnectOptions>
    </DropDown.ConnectDropDown>
  )
}
export const MilestonesDropDown = ({ milestones }) => {
  let milestone = milestones.map((milestone, index) => (
    <DropDown.Milestones key={milestone._id}>
      <span>{`${index + 1}.  ${milestone.milestone}`}</span>
    </DropDown.Milestones>
  ))
  return (
    <DropDown.MilestonesDropDown>
      {milestones && milestones.length > 0 ? milestone : null }
    </DropDown.MilestonesDropDown>
  )
}

// export default index
