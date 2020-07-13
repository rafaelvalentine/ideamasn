import styled from 'styled-components'


export const Pair = styled.div`
    display: flex;
    margin-top: .5rem;
`
export const PairSpace = styled(Pair)`
margin-top:0;
justify-content: space-between;
align-items: center;
`
export const NameContainer = styled.div`
width:100%;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
`
export const IMG = styled.img`
    margin-left: 40px;
    // &.rotateArrow{
    //   transform: rotate(90deg)
    // }
`

export const NameSpan = styled.span`
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 13px;
line-height: 19px;
color: ${props => props.theme.white};
`

export const EmailSpan = styled.span`
font-family: Poppins;
font-style: normal;
font-weight: 300;
font-size: 12px;
line-height: 18px;
color: ${props => props.theme.white};
`