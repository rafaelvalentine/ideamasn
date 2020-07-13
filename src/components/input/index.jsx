import React from 'react'
import * as Type from '../../themes/style/typeface'
import * as Form from '../../themes/style/Form'
import { Logo } from '../picture'

export const Main = ({ name, label, placeholder, type, value, changed, ...props }) => {
  return (
    <Form.MainLabelContainer {...props}>
      <Form.MainLabel>
        <Type.BoldLabel> { label } </Type.BoldLabel> <br />
      </Form.MainLabel>
      <Form.MainInput
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={changed}
        {...props} />
    </Form.MainLabelContainer>
  )
}

export const MainNoLabel = ({ name, label, ...props }) => {
  return (
    <Form.MainLabelContainer {...props} >
      <Form.MainInput name={name} type='hidden' autoComplete='off' {...props} />
    </Form.MainLabelContainer>
  )
}
export const MainAttachment = ({ name, ...props }) => {
  return (
    <Form.MainLabelContainer for='chat-attachment' {...props}>
      <Logo width='24px' height='24px' src={require('../../themes/images/attachment.svg')} style={{ cursor: 'pointer' }} />
      <Form.MainInput type='file' id='chat-attachment' name={name} style={{ display: 'none' }} {...props} />
    </Form.MainLabelContainer>
  )
}
export const Select = ({ name, label, children, value, ...props }) => {
  return (
    <Form.MainLabelContainer {...props}>
      <Form.MainLabel>
        <Type.BoldLabel> { label } </Type.BoldLabel> <br />
      </Form.MainLabel>
      <Form.Select name={name} value={value} {...props}> { children } </Form.Select>
    </Form.MainLabelContainer>
  )
}

export const SelectAlt = ({ name, children, value, changed, ...props }) => {
  return (
    <Form.MainLabelContainerAlt {...props}>
      <Form.Select name={name} value={value} onChange={changed} {...props}> { children } </Form.Select>
    </Form.MainLabelContainerAlt>
  )
}
export const SelectNoLabel = ({ name, children, value, changed, ...props }) => {
  return (
    <Form.MainLabelContainerAlt {...props}>
      <Form.Select name={name} value={value} onChange={changed} {...props}> { children } </Form.Select>
    </Form.MainLabelContainerAlt>
  )
}

export const TextArea = ({ label, name, ...props }) => {
  return (
    <Form.MainLabelContainer >
      <Form.MainLabel >
        <Type.BoldLabel > { label } </Type.BoldLabel>
      </Form.MainLabel>
      <Form.TxtArea name={name} {...props} />
    </Form.MainLabelContainer>
  )
}
export const CheckBox = ({ label, name, type, ...props }) => {
  return (
    <Form.CheckBoxLabel className={props.labelClass}>
      <Form.MainLabel >
        <Type.BoldLabel > { label } </Type.BoldLabel>
      </Form.MainLabel>
      <Form.CheckBox name={name} type={type} {...props} />
      <span className='checkmark' />
    </Form.CheckBoxLabel>
  )
}

export const SearchInput = ({ name, type, placeholder, value, changed, ...props }) => {
  return (
    <Form.AltBox>
      <Form.SearchInputContainer>
        <Logo src={require('../../themes/images/user-search.svg')}
          width='12px'
          height='12px'
        />
        <Form.SearchInput
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={changed}
          {...props}
        />
      </Form.SearchInputContainer>
    </Form.AltBox>
  )
}

