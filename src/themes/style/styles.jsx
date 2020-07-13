import styled from 'styled-components'
import { device } from '../../components/device'

export const Wrapper = styled.div`
background: ${props => props.theme.gray}
min-height: 100vh;
width: 100%;
`

export const SubWrapper = styled.div`
width:100%;
height:100%;
display: flex;
justify-content: ${props => props.justifyContent ? props.justifyContent : 'center' };
align-items:center;
padding:${props => props.padding ? props.padding : '64px 0 '};
flex-wrap ${props => props.flexWrap ? props.flexWrap : 'wrap'};
margin:0 auto;
@media ${device.laptop} {
  justify-content: ${props => props.justifyContent ? props.justifyContent : 'center' };
  &.usersCard{
    justify-content:space-between;
  }
}
`
export const SubWrapperAlt = styled(SubWrapper)`
flex-direction:column;
align-items: center;
padding:${props => props.padding ? props.padding : '64px 0 '};

`

export const ListWrapper = styled.div`
`
