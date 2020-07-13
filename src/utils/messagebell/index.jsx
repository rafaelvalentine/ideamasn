import React, { useState, useRef } from 'react'

import { Wrapper } from './styles'
import { Logo as Image } from '../../components/picture'
import Popover from '../../components/popover'

export default props => {
  const [toggle, setToggle] = useState(false)
  const [show, setShow] = useState(false)
  const [target, setTarget] = useState(null)
  const ref = useRef(null)

  const handleClick = (event) => {
    setShow(!show)
    setTarget(event.target)
  };
  return (
    <Wrapper {...props}>
      <Popover placement='bottom'>
        <Image src={require('../../themes/images/bubble.svg')} alt='message-bubble' width='20px' height='20px' showCursor />
      </Popover>
      {toggle ? 'its open' : null }
    </Wrapper>
  )
}
