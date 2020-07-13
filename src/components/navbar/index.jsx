import React from 'react'
import { NavLink } from 'react-router-dom'
import { Nav as NavWrapper } from './styles'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import '../../themes/sass/components/navbar.sass'

export default () => {
  return (

    <NavWrapper>
      <Navbar variant='dark' expand='lg'>
        <Navbar.Brand href='/'> MLB Results App</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto pr-5'>
            <NavLink exact to='/' activeStyle={{
              fontWeight: 'bold',
              color: 'white'
            }}
            className=' _nav-link mr-3'>
              <span class='mdi mdi-home-variant-outline mr-1 ' />
              Home
            </NavLink>
            <NavLink exact to='/dashboard' activeStyle={{
              fontWeight: 'bold',
              color: 'white'
            }}
            className=' _nav-link mr-3'>
              <span class='mdi mdi-table-account mr-1' />
              Dashboard
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </NavWrapper>

  )
}
