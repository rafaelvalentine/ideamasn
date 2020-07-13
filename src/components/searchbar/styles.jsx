import styled from './node_modules/styled-components'
import { device } from '../device'

export const Wrapper = styled.div`
position:relative;
width: 550px;
margin:0 145px 0 auto;
z-index:2000;
@media ${device.desktop} {
  margin:0 755px 0 auto;
}
`
