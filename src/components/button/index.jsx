import React from './node_modules/react'
import { Logo } from '../picture'
import Spinner from '../Tools/Spinner'
import * as ButtonStyle from './styles'


const Button = ({ content, clicked, loading, ...props }) => {
  return (
    <ButtonStyle.Container disabled={loading} onClick={clicked} {...props}>
      { loading ? <Spinner /> : content}
    </ButtonStyle.Container>
  )
}

export default Button
