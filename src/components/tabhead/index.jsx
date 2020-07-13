import React, { useState, useEffect, useRef } from './node_modules/react'
import { SortInput } from '../Input'
import { JobsDropDown } from '../DropDown'
import Button from '../Button'
import { TabHeader } from '../../theme/style/typeface'
import * as Tab from './styles'
const TabHead = ({ selected, clickedJob, clickedCategory, sortByValue, task, cancel, showCancel, handleFilterBy }) => {
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
    dropdown = <JobsDropDown handleFilterBy={handleFilterBy} />
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
  let clickedOne
  let clickedTwo
  selected ? clickedTwo = clickedJob : clickedOne = clickedJob
  return (
    <Tab.Wrapper >
      <TabHeader
        onClick={clickedOne}
        alt={selected}>
              JOB HISTORY
      </TabHeader>
      <TabHeader
        onClick={clickedTwo}
        alt={!selected}>
             JOB CATEGORIES
      </TabHeader>

      <div style={{ marginLeft: 'auto', marginRight: '87px' }} ref={wrapperRef}>
        {selected ? <SortInput
          showCancel={showCancel}
          cancel={cancel}
          placeholder={task || 'Sort By'}
          value={sortByValue}
          clicked={toggleDropDown}
        >
          { dropdown }
        </SortInput>
          : <Button
            content='CREATE JOB CATEGORY'
            width='154px'
            height='40px'
            borderRadius='4px'
            fontSize='10px'
            margin='0 auto'
            clicked={clickedCategory}
          />}
      </div>
    </Tab.Wrapper>
  )
}

export default TabHead
