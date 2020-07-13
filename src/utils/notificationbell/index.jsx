import React, { useState } from 'react'
import Popover from '../../components/popover'

import { Wrapper } from './styles'
import { Logo as Image } from '../../components/picture'

export default props => {
  const [toggle, setToggle] = useState(false)

  return (
    <Wrapper {...props}>
      <Popover placement='bottom'>
        <Image src={require('../../themes/images/bell.svg')} alt='message-bubble' width='20px' height='20px' showCursor />
      </Popover>
      {toggle ? 'its open' : null }
    </Wrapper>
  )
}
