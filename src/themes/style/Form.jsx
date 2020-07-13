import styled from 'styled-components'

export const CardsContainer = styled.div`
    display: flex;
    flex-wrap:  ${props => props.flexWrap ? props.flexWrap : 'wrap'};
    flex-direction: ${props => props.direction ? props.direction : 'column'};
    justify-content:${props => props.justify};
    align-items:${props => props.align};
    align-content:${props => props.content};
    margin: ${props => props.margin};
    width:${props => props.width ? props.width : '100%'};
`
export const Input = styled.input`
    width: ${props => props.width};
    border: none;
    height: 40px;
    background: transparent;
    padding-left: 10px;
    margin-bottom: 5px;

    font-weight: 300;
    font-size: 1.2rem;
    color: ${props => props.theme.black};

    &:focus {
        outline: none;
    }
`
Input.defaultProps = {
  width: '100%'
}

export const Label = styled.label`
    border-bottom: 0.25px solid ${props => props.theme.lightGray};
    width: 100%;
    margin: 1rem 1rem 4rem;
`
export const NoMLabel = styled(Label)`
    margin: 1rem 1rem;
`
export const CheckBoxLabel = styled.label`
    margin: 15px 0 0;
    cursor: pointer;
    vertical-align: top;
    display: block;
    position: relative;
    padding-left: 24px;
    z-index: 2;
    position: relative;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    .checkmark {
        position: absolute;
        top: 8px;
        left: 0;
        height: 15px;
        width: 15px;
        background-color: #fff;
        border: .5px solid ${props => props.theme.cardName}
      }
      .checkmark:after {
        content: "";
        position: absolute;
        display: none;
      }
     
      input:checked ~ .checkmark:after {
        display: block;
      }
      :hover input ~ .checkmark {
        background-color: ${props => props.theme.gray};
      }
        input:checked ~ .checkmark {
        background-color:  ${props => props.theme.blue};
      }
      .checkmark:after {
        left: 5px;
        top: 1px;
        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
      }
      &.radio {
        display: block;
        position: relative;
        padding-left: 35px;
        margin-bottom: 12px;
        cursor: pointer;
        font-size: 22px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
      
      /* Hide the browser's default radio button */
      &.radio input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
      }
      
      /* Create a custom radio button */
      &.radio .checkmark {
        position: absolute;
        top: 0;
        left: 0;
        height: 12px;
        width: 12px;
        background-color: ${props => props.theme.white};
        border-radius: 50%;
        border: .5px solid ${props => props.theme.orange}
      }
      
      /* On mouse-over, add a grey background color */
      &.radio:hover input ~ .checkmark {
        background-color: #ccc;
      }
      
      /* When the radio button is checked, add a blue background */
      &.radio input:checked ~ .checkmark {
        background-color: ${props => props.theme.white};
      }
      
      /* Create the indicator (the dot/circle - hidden when not checked) */
      &.radio .checkmark:after {
        content: "";
        position: absolute;
        display: none;
      }
      
      /* Show the indicator (dot/circle) when checked */
      &.radio input:checked ~ .checkmark:after {
        display: block;
      }
      
      /* Style the indicator (dot/circle) */
      &.radio .checkmark:after {
        top: 2.6px;
        left: 2.7px;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        border: solid ${props => props.theme.orange};
        border-width: 1
        background: ${props => props.theme.orange};
      }
`
export const CheckBox = styled.input`
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0
    // color: ${props => props.theme.purple};
    // margin-right: 10px;
    // position: absolute;
    // top: 2px;
    // left: 0;
    // opacity: 0;

    // :checked ~ .checkbox__label:after{
    //     border-color: #2948ff;
    //     color: #2948ff;
    //     content: "\\2713";
    // }
`

export const TwoComponentBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 0;
    padding:0 5px;
    flex-wrap: ${props => props.flexWrap ? props.flexWrap : 'nowrap'}
`
export const AltBox = styled.div`
    justify-content:flex-start;
    display: flex;
    align-items: center;
    width: ${props => props.width ? props.width : '100%'};
    margin: 0;
    padding:0 5px;
    flex-wrap: ${props => props.flexWrap ? props.flexWrap : 'nowrap'}
`
export const AltBoxStacked = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 0;
    padding:0;
    flex-direction:column;
`
export const Box = styled.div`
    margin: ${props => props.margin};
    padding: ${props => props.padding};
    border-top: ${props => props.border};
    width: ${props => props.width};
`
Box.defaultProps = {
  margin: '1rem',
  padding: '1rem'
}
export const NoSpaceBox = styled.div`
    display: flex;
`
export const UnderLinedBox = styled.div`
    border-bottom: 1px solid #E0E7FF;
    display: flex;
    width:100%;
    padding-bottom: 30px;
    flex-direction:column;
`
/**
     * Main forms
     */
export const MainInput = styled.input`
    width: ${props => props.width};
    border: 1px solid #E0E7FF;
    border-radius: 2px;
    height: 40px;
    background: rgba(224, 231, 255, 0.2);
    padding: 12px 18px;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    color: ${props => props.theme.header};
    cursor: pointer;
    ::placeholder {
        font-size: 12px;
        color: ${props => props.theme.title};
    }

    &:focus {
        transition: .3s;
        outline: 0.5px solid #54c4cf;
    }
`
MainInput.defaultProps = {
  width: '320px'
}

export const SearchInput = styled(MainInput)`
width: 200px;
height: 40px;
background: ${props => props.theme.transparent};
border: 1px solid ${props => props.theme.transparent};
border-radius: 0;
&:focus {
    outline: none;
}
`
export const SortInput = styled.div`
border: 1px solid ${props => props.theme.transparent};
width:80px;
height:100%;
background:${props => props.theme.transparent};
font-style: normal;
font-weight: bold;
font-size: 10px;
line-height: 14px;
text-align:center;
color: #9E9E9E;
cursor:pointer;
`
export const NoLabelInput = styled(MainInput)`
    margin: ${props => props.margin};
`
NoLabelInput.defaultProps = {
  margin: '1rem',
  width: '100%'
}
export const MainLabelContainer = styled.label`
    display: block;
    margin-top: ${props => props.marTop ? props.marTop : '24px'};
    margin: ${props => props.MainLabelContainerMargin };
  
`
export const MainLabelContainerAlt = styled.div`
    margin-top ${props => props.marTop ? props.marTop : '16px'};
`
export const UsedCard = styled.div`
    display: flex;
    border-radius: 0.2rem;
    border: 0.1rem solid ${props => props.theme.formBorder};
    padding: 0.8rem 2rem 0.5rem;
    color: ${props => props.theme.gray};
    font-size: 1.4rem;
    font-weight: bold;
    margin: 1rem;
`
export const MainLabel = styled.div`
    margin-bottom: 8px;
`
export const PaymentLabelPair = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 1rem;
`
export const Select = styled.select`
    width: ${props => props.width};
    height: ${props => props.height};
    margin: ${props => props.margin};
    border: 1px solid ${props => props.theme.selectBorder};
    background: transparent;
    padding: 8px;
    font-style: normal;
    font-weight: bold;
    font-size: 10px;
    line-height: 14px;
    appearance: none;
    background-image: url(${require('../images/arrow-dropdown.svg')});
    background-repeat: no-repeat;
    background-position: 90%;
    background-size: center;
    border-radius: 2px;
    color: ${props => props.theme.cardName};
    cursor:pointer;
    :focus{
        outline: ${props => props.theme.blue};
    }
`
Select.defaultProps = {
  width: '49px',
  height: '29px'
}
export const TxtArea = styled.textarea`
    border: 0.5px solid #54c4cf;    
    border-radius: 2px !important;
    // resize: none;
    width: ${props => props.width ? props.width : '100%'};
    height: ${props => props.height ? props.height : '139px'};
    padding: 10px;
`
export const NoLabelSelect = styled(Select)`
    margin: ${props => props.margin};
`
NoLabelSelect.defaultProps = {
  margin: '1rem'
}
export const FormContainer = styled.div`
    width: ${props => props.width};
`
export const RadioContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 4rem;
`
export const TableHead = styled.div`
    width: 80rem;
    display: grid;
    grid-template-columns: repeat(4 , 1fr);
    padding: 1rem;
    margin-bottom: 1rem;
`
export const Total = styled(TableHead)`
    color: ${props => props.theme.blue};
    font-weight: bold;
    font-size: 1.8rem;
    line-height: normal;
    letter-spacing: 0.1em;
    text-transform: uppercase;
`
export const TableList = styled(TableHead)`
    border: 0.1rem solid ${props => props.theme.formBorder};
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
    /* font */
    color: ${props => props.theme.darkGray};
    font-weight: bold;
    font-size: 12px;
    line-height: normal;
    letter-spacing: 0.1em;
    text-transform: uppercase;
`

export const DatePickerContainer = styled.div`
padding: 0 0 0 8px;
background: ${props => props.theme.white};
border-radius: 4px;
display:flex;
align-items:center;
justify-content:flex-start;
flex-wrap:nowrap;
`
export const SearchInputContainer = styled(DatePickerContainer)`
padding: 0 30px;
`

export const SortInputContainer = styled(DatePickerContainer)`
position: relative;
padding: 12px 8px;
background: ${props => props.theme.transparent};
height:40px;
border: 1px solid ${props => props.theme.faintBorder};
display: flex;
justify-content: flex-start;
align-items:center;
`
/**
 *
 * .checkbox__input {
    position: absolute;
    top: 2px;
    left: 0;
    opacity: 0;
}

[type=checkbox], [type=radio] {
    box-sizing: border-box;
    padding: 0;
}
button, input {
    overflow: visible;
}
button, input, optgroup, select, textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
 *
 *
 * .checkbox__label:after {
    position: absolute;
    top: 3px;
    left: 0;
    width: 14px;
    height: 14px;
    transition: all .2s ease-in-out;
    border: 1px solid #7b7c7f;
    border-radius: 2px;
    background: #fff;
    color: #fff;
    font: 10px/13px icomoon!important;
    font-variant: normal;
    text-align: center;
    text-transform: none;
    content: "";

    .checkbox__input:checked~.checkbox__label:after {
    border-color: #2948ff;
    color: #2948ff;
    content: "\EA10";

 */
