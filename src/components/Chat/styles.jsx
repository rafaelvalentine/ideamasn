import styled from 'styled-components'

export const Wrapper = styled.div`
width: ${props => props.width ? props.width : '100%'};
height:${props => props.height ? props.height : '100%'};
margin: ${props => props.margin ? props.margin : '0 auto'};
padding:${props => props.padding};
background-color: ${props => props.backgroundColor ? props.backgroundColor : 'transparent'};
border-top:${props => props.borderTop};
border-bottom:${props => props.borderBottom};
overflow:hidden;
&.user-info{

  :hover{
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
    cursor:pointer;
  }
}
`

export const SubWrapper = styled.section`
width: ${props => props.width};
height:${props => props.height};
display: flex;
align-items:center;
flex-direction: ${props => props.altRow ? 'row-reverse' : 'row'}
justify-content:flex-start;
padding:${props => props.padding};
margin:${props => props.margin};
`
export const SubWrapperAlt = styled(SubWrapper)`
width: ${props => props.width};
height:${props => props.height};
flex-direction:column;
padding:${props => props.padding};
margin:${props => props.margin};
align-items:center;
justify-content:flex-start;
`
export const Title = styled.h1`
font-size: 18px;
line-height: 18px;
color: #0C57FB;
`
export const InfoWrapper = styled.div`
width: ${props => props.width ? props.width : '320px'};
height:${props => props.height ? props.height : '560px'};
margin: 0 auto;
backgroundColor: ${props => props.backgroundColor ? props.backgroundColor : '#FFFFFF'};
box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
border-radius: 4px;
padding: ${props => props.padding}
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:flex-start;
overflow-y:auto;
::-webkit-scrollbar {
  width: 4px;
  border-radius: 100px;
}
// ::-webkit-scrollbar-track {
//   // -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
// }
::-webkit-scrollbar-thumb {
  background-color: rgba(128, 128, 128, 0.2);
  outline: 1px solid slategrey;
}
&.noscroll{
  ::-webkit-scrollbar {
    width: 4px;
    border-radius: 100px;
  }
  // ::-webkit-scrollbar-track {
  //   // -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  // }
  ::-webkit-scrollbar-thumb {
    background-color: rgba(128, 128, 128, 0);
    outline: 1px solid slategrey;
  }
}
&.hideScroll{
  overflow:hidden;
}
&.hideScroll > div > div{
  overflow-x:hidden !important;
}
`
export const BubbleWrapper = styled.div`
background-color: ${props => props.user ? '#3CB46E' : props.theme.white};
border-radius: ${props => props.user ? '4px 4px 0 4px' : '4px 4px 4px 0'};
padding: 13px 16px;
margin: 0 0 8px;
min-width:20px;
max-width: 340px;
`