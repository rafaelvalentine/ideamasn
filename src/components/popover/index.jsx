import React from 'react'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import { Wrapper } from './styles'
export default ({ placement, ...props }) => {
  return (
    <Wrapper>
      <OverlayTrigger
        trigger='click'
        key={placement}
        placement={placement}
        overlay={
          <Popover id={`popover-positioned-${placement}`} className='popover-font'>
          {/**   <Popover.Title as='h3'>{`Popover ${placement}`}</Popover.Title>*/}
            <Popover.Content>
              <strong>Holy guacamole!</strong> Check this info.
              <strong>Holy guacamole!</strong> Check this info.
              <strong>Holy guacamole!</strong> Check this info.
              <strong>Holy guacamole!</strong> Check this info.
              <strong>Holy guacamole!</strong> Check this info.
              <strong>Holy guacamole!</strong> Check this info.
              <strong>Holy guacamole!</strong> Check this info.
              <strong>Holy guacamole!</strong> Check this info.
              <strong>Holy guacamole!</strong> Check this info.
              <strong>Holy guacamole!</strong> Check this info.
              <strong>Holy guacamole!</strong> Check this info.
            </Popover.Content>
          </Popover>
        }
      >{/**    // <Button variant="secondary">Popover on {placement}</Button> */}
        {props.children}
      </OverlayTrigger>
    </Wrapper>

  )
}
