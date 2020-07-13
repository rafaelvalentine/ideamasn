import React, { Fragment } from 'react'
import * as Com from './styles'

/**
 *  Name component to Display Name and profile of Admin and toggle dropdown
 */
export const Name = ({ name, alt, icon, clicked, children, imageClassName, email, ...props }) => {
  // const Label = marginBot ? Form.NoMLabel : Form.Label
  return (
    <Fragment>
      <Com.NameContainer onClick={clicked}>
        <Com.PairSpace >
          <div>
            <Com.NameSpan>{ name || 'Solaru Olusegun' }</Com.NameSpan>
            {email ? <Com.EmailSpan>{ email }</Com.EmailSpan> : null }
          </div>
          {icon ? <Com.IMG src={icon} alt={alt} {...props} /> : null}
        </Com.PairSpace>
      </Com.NameContainer>
      {children}
    </Fragment>
  )
}
