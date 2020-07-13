import React, { useState, useEffect, useRef } from 'react'
import * as Com from './styles'
import { Admin as AdminIMG } from '../picture'
import { Name as AdminName } from '../name'
// import { NavDropDown } from '../dropdown'

/**
 * this component holds the admin profile Info and Dropdown list for more options
 */
const Admin = ({ admin, ...props }) => {
  /**
   * here i am using useState to toggle the dropdown
   */
  const [dropDown, setDropDown] = useState({})

  const toggleDropDown = () => {
    if (dropDown.show) {
      return setDropDown({ show: false })
    }
    return setDropDown({ show: true })
  }
  let dropdown
  if (dropDown.show) {
    // dropdown = <NavDropDown history={history} handleLogoutUser={handleLogoutUser} />
    // dropdown = 'it opens'
  }
  /**
 * Hook that alerts clicks outside of the passed ref
 */
  function useOutsideAlerter (ref) {
  /**
   * Alert if clicked on outside of element
   */
    function handleClickOutside (event) {
      if (ref.current && !ref.current.contains(event.target)) {
        return setDropDown({ show: false })
      }
    }

    useEffect(() => {
    // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
      // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside)
      }
    })
  }
  const wrapperRef = useRef(null)
  useOutsideAlerter(wrapperRef)

 
  return (
    <Com.AdminWrapper ref={wrapperRef} flexDirection={props.flexDirection}>
      <AdminIMG
        src={null || require('../../themes/avatars/default_user.png')}
      />
      <AdminName name={admin.fullname} clicked={toggleDropDown}>
        { dropdown }
      </AdminName>
    </Com.AdminWrapper>
  )
}

export default Admin
