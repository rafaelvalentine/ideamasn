import React, { useEffect, useRef } from 'react'
import * as Card from './styles'
import { Logo, User } from '../Picture'
import { MainNoLabel, MainAttachment } from '../Input'
import { ChatUserName, ChatStatus, ChatMessageText, ChatMessageLink, NewMessages } from '../../theme/style/typeface'
import { ChatSendBtn } from '../Button'
import moment from 'moment'
import FilterResults from 'react-filter-search'
import { Scrollbars } from 'react-custom-scrollbars'

const SearchInput = ({ handleInputChange, inputs }) => {
  return (
    <Card.Wrapper backgroundColor='white' borderBottom='1px solid #DDDDDD' height='100'>
      <Card.SubWrapper padding='10px 32px'>
        <Logo src={require('../../assets/images/chat_search.svg')}
          width='16px'
          height='16px'
        />
        <MainNoLabel type='text' name='filter' value={inputs.filter} onChange={handleInputChange} width='240px' border='transparent' placeholder='Search...' MainLabelContainerMargin='5px 0 0' />
      </Card.SubWrapper>
    </Card.Wrapper>
  )
}

export const UserInfo = ({ name, message, time, image, notification, ...props }) => {
  return (
    <Card.Wrapper className='user-info' padding='16px 24px' borderBottom='1px solid #DDDDDD' height='80px' {...props}>
      <Card.SubWrapper style={{ alignItems: 'flex-start' }} width='100%'>
        <User width='48px' height='48px' image={image} margin='0 8px' borderRadius />
        <Card.SubWrapperAlt width='100%' style={{ alignItems: 'flex-start' }}>
          <Card.SubWrapper width='100%' height='30px' style={{ justifyContent: 'space-between' }} margin=''>
            <ChatUserName>
              {name || 'User'}
            </ChatUserName>
            <ChatStatus style={{ alignSelf: 'center' }}>
              {time}
            </ChatStatus>
          </Card.SubWrapper>
          <Card.SubWrapper width='100%' height='30px' style={{ justifyContent: 'space-between' }} margin=''>
            <ChatStatus>
              {message || 'Status'}
            </ChatStatus>
            {notification ? <NewMessages style={{ alignSelf: 'center' }}>
              {notification}
            </NewMessages> : null}
          </Card.SubWrapper>
        </Card.SubWrapperAlt>
      </Card.SubWrapper>
    </Card.Wrapper>
  )
}

export const UserCard = ({ userList, handleSetChatInfo, handleDeleteNotification }) => {
  // console.log(userList)

  return userList.map(chat => {
    let userId = localStorage.getItem('userId')
    const handleInfo = (...args) => {
      // console.log(...args)
      handleSetChatInfo(...args)
      if (notification > 0) {
        handleDeleteNotification(chat._id, userId)
      }
    }
    let firstName
    let lastName
    let organizationName
    let ImageToDisplay = ''
    let notification
    if (chat.SUser === null || chat.FUser === null) {
      return null
    }
    if (chat.SUser._id !== userId) {
      if (chat.SUser.freelancer) {
        firstName = chat.SUser.freelancer.firstName
        lastName = chat.SUser.freelancer.lastName
        ImageToDisplay = chat.SUser.freelancer.profileImageUrl
      }
      if (chat.SUser.organization) {
        organizationName = chat.SUser.organization.organizationName
        ImageToDisplay = chat.SUser.organization.organizationLogoUrl
      }
      let status = chat.active ? 'online' : 'offline'
      let nameToDisplay
      let lastMessage = chat.chat.length - 1
      let latestMessage = chat.chat && chat.chat.length > 0 ? chat.chat[ lastMessage ].message : status
      let LatestMessageTime = chat.chat && chat.chat.length > 0 ? moment(new Date(chat.chat[lastMessage].createdAt)).calendar(null, {
        sameDay: 'LT',
        nextDay: '[Tomorrow]',
        nextWeek: 'dddd',
        lastDay: '[Yesterday]',
        lastWeek: '[Last] dddd',
        sameElse: 'DD/MM/YYYY'
      }) : moment(new Date(chat.createdAt)).calendar(null, {
        sameDay: 'LT',
        nextDay: '[Tomorrow]',
        nextWeek: 'dddd',
        lastDay: '[Yesterday]',
        lastWeek: '[Last] dddd',
        sameElse: 'DD/MM/YYYY'
      })
      if (chat.notification.FUser !== null) {
        notification = chat.notification.FUser.notificationCount
      }

      if (chat.SUser.type === 'freelancer') {
        nameToDisplay = `${firstName} ${lastName}`
      }
      if (chat.SUser.type === 'organziation') {
        nameToDisplay = organizationName
      }
      // console.log(user)
      return (
        <UserInfo
          onClick={() => handleInfo(chat.SUser, chat.chat, chat._id, userList, 'SUser', notification)}
          key={Math.random()}
          name={nameToDisplay}
          message={shortenText(latestMessage)}
          time={LatestMessageTime}
          image={ImageToDisplay}
          notification={notification}
        />
      )
    }
    if (chat.SUser._id === userId) {
      if (chat.FUser.freelancer) {
        firstName = chat.FUser.freelancer.firstName
        lastName = chat.FUser.freelancer.lastName
        ImageToDisplay = chat.FUser.freelancer.profileImageUrl
      }
      if (chat.FUser.organization) {
        organizationName = chat.FUser.organization.organizationName
        ImageToDisplay = chat.FUser.organization.organizationLogoUrl
      }
      let status = chat.active ? 'online' : 'offline'
      let nameToDisplay
      let lastMessage = chat.chat.length - 1
      let latestMessage = chat.chat && chat.chat.length > 0 ? chat.chat[ lastMessage ].message : status
      let LatestMessageTime = chat.chat && chat.chat.length > 0 ? moment(new Date(chat.chat[lastMessage].createdAt)).calendar(null, {
        sameDay: 'LT',
        nextDay: '[Tomorrow]',
        nextWeek: 'dddd',
        lastDay: '[Yesterday]',
        lastWeek: '[Last] dddd',
        sameElse: 'DD/MM/YYYY'
      }) : moment(new Date(chat.createdAt)).calendar(null, {
        sameDay: 'LT',
        nextDay: '[Tomorrow]',
        nextWeek: 'dddd',
        lastDay: '[Yesterday]',
        lastWeek: '[Last] dddd',
        sameElse: 'DD/MM/YYYY'
      })
      if (chat.FUser.type === 'freelancer') {
        nameToDisplay = `${firstName} ${lastName}`
      }
      if (chat.FUser.type === 'organization') {
        nameToDisplay = organizationName
      }
      if (chat.notification.SUser !== null) {
        notification = chat.notification.SUser.notificationCount
      }

      if (!chat.FUser.type) {
        nameToDisplay = 'Admin'
        ImageToDisplay = ''
      }
      // console.log(user)
      return (
        <UserInfo
          onClick={() => handleInfo(chat.FUser, chat.chat, chat._id, userList, 'FUser', notification)}
          key={Math.random()}
          name={nameToDisplay}
          message={shortenText(latestMessage)}
          time={LatestMessageTime}
          image={ImageToDisplay}
          notification={notification}
        />
      )
    }
  })
}
export const UsersList = ({ user, userList, handleSetChatInfo, handleInputChange, inputs, handleDeleteNotification, ...props }) => {
  return (
    <Card.Wrapper margin='0 24px 0 0' backgroundColor='white' width='320px' {...props}>
      <SearchInput
        handleInputChange={handleInputChange}
        inputs={inputs} />
      <FilterResults
        value={inputs.filter}
        data={userList}
        renderResults={results => (
          <Card.InfoWrapper height='600px' padding='0 0 2px'{...props}>
            {results && results.length > 0 ? <UserCard handleSetChatInfo={handleSetChatInfo} userList={results} handleDeleteNotification={handleDeleteNotification} /> : <Card.SubWrapper width='100%' height='30px' style={{ justifyContent: 'center' }} margin='auto'>
              <ChatUserName>
                  No Chat
              </ChatUserName>

            </Card.SubWrapper>}
          </Card.InfoWrapper>
        )}
      />
    </Card.Wrapper>
  )
}

const shortenLink = link => {
  if (link.length > 25) {
    return `'${link.slice(0, 25)}... '`
  }
  return `'${link} '`
}
export const shortenText = text => {
  if (text.length > 25) {
    return `${text.slice(0, 25)}... `
  }
  return `${text} `
}
export const ChatBubble = ({ message, file, time, ...props }) => {
  let _link
  let _message = message

  let expression = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi
  let regex = new RegExp(expression)

  if (message.match(regex)) {
    _link = message.match(regex)
    _message = message.replace(regex, shortenLink(_link[0]))
    // console.log(_link, shortenLink(_link[0]))
  }
  return (
    <Card.SubWrapperAlt >
      <Card.BubbleWrapper {...props}>
        <ChatMessageText style={{ lineHeight: '18px', color:'' }}{...props}>
          {_message}
        </ChatMessageText>
        {message.match(regex) ? <ChatMessageLink>
          <a href={`${_link}`} target='_blank' rel='noopener noreferrer'>
            {_link}
          </a>
        </ChatMessageLink> : null}
        <ChatStatus style={{margin:'16px 0 0 '}} {...props}>
          {time}
        </ChatStatus>
      </Card.BubbleWrapper>
    </Card.SubWrapperAlt>
  )
}
export const ChatMessage = ({ message, image, time, file, ...props }) => {
  return (
    <Card.Wrapper height='100' margin='40px 0' padding='0 20px'>
      <Card.SubWrapper {...props}>
        {/* <User width='40px' height='40px' image={image} margin='0 16px' /> */}
        <ChatBubble message={message} time={time} {...props} />
      </Card.SubWrapper>
    </Card.Wrapper>
  )
}

export const ChatInput = ({ handleInputChange, inputs, handlePostNewChatMessage, ...props }) => {
  return (
    <Card.Wrapper style={{ alignSelf: 'flex-end' }}height='100px' borderTop='1px solid #DDDDDD'>
      <Card.SubWrapper padding='10px 0'>
        <MainNoLabel type='text' width='400px' border='transparent' placeholder='Type a message' MainLabelContainerMargin='5px 0 0' name='message'value={inputs.message} onChange={handleInputChange} {...props} />
        <MainAttachment />
        <ChatSendBtn loading={inputs.loading} onClick={handlePostNewChatMessage} />
      </Card.SubWrapper>
    </Card.Wrapper>
  )
}
export const ChatBox = ({ user, selectedUser, chat, inputs, handlePostNewChatMessage, handleInputChange, children, ...props }) => {
  let chatId = localStorage.getItem('currentChatId')
  let userId = localStorage.getItem('userId')
  let firstName
  let lastName
  let organizationName
  let profileImageUrl
  let organizationLogoUrl
  let nameToDisplay = 'User'
  let imageToDisplay
  let status = selectedUser.active ? 'online' : 'offline'
  if (selectedUser.freelancer) {
    firstName = selectedUser.freelancer.firstName
    lastName = selectedUser.freelancer.lastName
    profileImageUrl = selectedUser.freelancer.profileImageUrl
  }
  if (selectedUser.organization) {
    organizationName = selectedUser.organization.organizationName
    organizationLogoUrl = selectedUser.organization.organizationLogoUrl
  }
  if (selectedUser.type === 'freelancer') {
    nameToDisplay = `${firstName} ${lastName}`
    imageToDisplay = profileImageUrl
  }
  if (selectedUser.type === 'organization') {
    nameToDisplay = organizationName
    imageToDisplay = organizationLogoUrl
  }
  if (!selectedUser.type) {
    nameToDisplay = 'Admin'
    imageToDisplay = ''
  }
  let messages = chat.map(chat => {
    let time = moment(new Date(chat.createdAt)).calendar(null, {
      sameDay: 'LT',
      nextDay: '[Tomorrow]',
      nextWeek: 'dddd',
      lastDay: '[Yesterday]',
      lastWeek: 'dddd',
      sameElse: 'DD/MM/YYYY'
    })
    if (chat.userId !== userId) {
      return <ChatMessage key={chat._id} message={chat.message} time={time} image={imageToDisplay} />
    }
    return <ChatMessage message={chat.message} key={chat._id} time={time} image={user.profilePicture} user alt altRow />
  })
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView()
    window.scrollTo(0, 0)
  }
  // console.log(selectedUser);
  useEffect(scrollToBottom, [chat])
  return (
    <Card.Wrapper padding='0 24px' backgroundColor='white' width='320px' {...props}>
      <Card.SubWrapperAlt>
        {chat ? <UserInfo padding='10px 16px' height='70px'
          name={nameToDisplay}
          message={status}
          image={imageToDisplay}
        /> : <div style={{ height: '100px', width: '100%' }} /> }
        <Card.InfoWrapper className='noscroll hideScroll' style={{ height: '500px', boxShadow: 'none' }} height='485px' width='100%'>
          <Scrollbars autoHide style={{ height: '500px' }}>
            {chat && chat.length > 0 ? messages : <Card.SubWrapper width='100%' height='100%' style={{ justifyContent: 'center' }} margin='auto'>
              <ChatUserName >
                  No Messages
              </ChatUserName>
            </Card.SubWrapper> }
            <div ref={messagesEndRef} />
          </Scrollbars>
        </Card.InfoWrapper>
        {chatId ? <ChatInput
          handleInputChange={handleInputChange}
          inputs={inputs}
          handlePostNewChatMessage={handlePostNewChatMessage}
        /> : null }
      </Card.SubWrapperAlt>

    </Card.Wrapper>
  )
}
