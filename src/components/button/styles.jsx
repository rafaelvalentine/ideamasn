import styled from './node_modules/styled-components'

export const Container = styled.div`
    margin:${props => props.margin};
    width: ${props => props.width};
    height: ${props => props.height};
    border-radius:${props => props.borderRadius};
    border: 1px solid ${props => props.theme.transparent};
    text-align: center;
    font-style: normal;
    font-weight: bold;
    font-size: ${props => props.fontSize};
    line-height: 21px;
    cursor: pointer;
    color: ${props => props.alt ? props.theme.paleGreen : props.theme.white};
    background-color: ${props => props.alt ? props.theme.lightGreen : props.theme.green};
    transition: .3s;
    display:flex;
    justify-content:center;
    align-items:center;
`
Container.defaultProps = {
  width: '320px',
  margin: '24px auto',
  height: '50px',
  borderRadius:'2px',
  fontSize: '12px'
}

export const AltContainer = styled(Container)`
    background-color: ${props =>
    props.chosen ? props.theme.seaBlue : 'transparent'};
    border: ${props => props.chosen ? null : `0.5px solid ${props.theme.seaBlue}`};
    color: ${props => (props.chosen ? '#fff' : props.theme.seaBlue)};
    width:${props => props.width};
    height:${props => props.height};
`

export const SearchButton = styled(Container)`
position: absolute;
top:0;
right:150px;
margin:${props => props.margin};
width: ${props => props.width};
height: ${props => props.height};
border-radius: 0 2px 2px 0;
text-transform: uppercase;
`
SearchButton.defaultProps = {
  width: '134px',
  margin: '0',
  height: '40px'
}
export const FilterButton = styled(SearchButton)`
font-weight: bold;
color: ${props => props.theme.green};
background-color: ${props => props.theme.white};
border: 1px solid ${props => props.theme.transparent};
border-radius: 2px;
right:0;
`

export const CreateUserButton = styled(Container)`
margin:${props => props.margin};
width: ${props => props.width};
height: ${props => props.height};
color: ${props => props.theme.green};
background-color: ${props => props.theme.transparent};
border: 1px solid ${props => props.theme.green};
align-self: flex-end;
border-radius: 4px;
`
CreateUserButton.defaultProps = {
  width: '134px',
  margin: '0 80px 0 0',
  height: '40px'
}
export const CloseSearchButton = styled(CreateUserButton)`
border: 1px solid ${props => props.theme.red};
color: ${props => props.theme.red};
`
export const GreenButtonAlt = styled(Container)`
    width: ${props => props.width};
    height: ${props => props.height};
    margin:${props => props.margin}
    color: ${props => props.theme.white};
    background-color: ${props => props.theme.green};
    border-radius: 2px;
    border: 1px solid ${props => props.theme.green};
    text-transform:capitalize;
    text-align: center;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 21px;
    cursor: pointer;
    color: ${props => props.theme.white};
    background-color: 'red';
    transition: .3s;
`;
GreenButtonAlt.defaultProps = {
  width: '90px',
  height: '32px',
  margin: '0 auto'
}
export const RedButtonAlt = styled(GreenButtonAlt)`
    width: ${props => props.width};
    height: ${props => props.height};
    margin:${props => props.margin}
    color:${props => props.theme.black};
    background-color: ${props => props.theme.green};
`;

export const DuoButtonWrapper = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:100%;
padding:${props => props.padding};
margin:${props => props.margin};
`

DuoButtonWrapper.defaultProps = {
  padding: '0 8px',
  margin: '0'
}
export const Container2 = styled.div`
    padding: 1rem 0;
    margin:1rem  ${props => props.nom ? null : 'auto'};
    width: ${props => props.width};
    border-radius: 0.2rem;
    text-align: center;
    font-size: 0.8rem;
    font-weight: 600;
    cursor: pointer;
    color: #fff;
    background-color: ${props => props.theme.orange};
    border:none;
    height:48px;
`
Container2.defaultProps = {
  width: '14rem'
}

export const AltContainer2 = styled(Container2)`
    background-color: ${props =>
    props.chosen ? props.theme.seaBlue : 'transparent'};
    border: ${props => props.chosen ? null : `0.5px solid ${props.theme.seaBlue}`};
    color: ${props => props.chosen ? '#fff' : props.theme.seaBlue};
    width: ${props => props.width};
    height: ${props => props.height};
    margin:16pxk auto;
    display: block;
`

export const ChatContainer = styled(Container2)`
font-size: 14px;
line-height: 14px;
text-transform: capitalize;
color: #FFFFFF;
margin: ${props => props.margin};
background-color: ${props => props.theme.chatBtnRed};
border:none;
display:flex;
justify-content:center;
align-items:center;
width: ${props => props.width};
`

export const BioContainer = styled(Container2)`
background: ${props => props.theme.orange};
color: ${props => props.theme.white};
border-radius: 122px;
font-size: 12px;
line-height: 1;
width:100px;
height:32px;
padding:${props => props.padding ? props.padding : '0'};
margin: ${props => props.margin};
display:flex;
justify-content:center;
align-items:center;
`

export const GTPayContainer = styled(Container2)`
background: ${props => props.theme.orange};
color: ${props => props.theme.white};
border-radius: 122px;
font-size: 12px;
line-height: 1;
width:150px;
height:48px;
padding:${props => props.padding ? props.padding : '0'};
margin: ${props => props.margin ? props.margin : '0 auto'};
display:flex;
justify-content:center;
align-items:center;
border-radius: 2px;
`