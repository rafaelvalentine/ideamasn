import styled from 'styled-components'
// import { device } from '../device'

export const Container = styled.div`
    background-color: ${props => props.backgroundColor ? props.theme[props.backgroundColor] : props.theme.white};
    box-shadow: ${props => props.boxShadow};
    width: ${props => props.width};
    height: ${props => props.height};
    color: ${props => props.color ? props.theme[props.color] : props.theme.white};
    border-radius:${props => props.borderRadius ? props.borderRadius : '4px'};
    display: flex;
    flex-wrap:  ${props => props.flexWrap ? props.flexWrap : 'wrap'};
    flex-direction: ${props => props.direction ? props.direction : 'column'};
    justify-content:${props => props.justify};
    align-items:${props => props.align};
    align-content:${props => props.content};
    margin: ${props => props.margin};
    padding:${props => props.padding};
`
Container.defaultProps = {
  width: '300px',
  height: '150px',
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.08)'
}
