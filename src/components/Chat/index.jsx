import React from 'react'
import { Wrapper, SubWrapper, SubWrapperAlt, Title } from './styles'
import { UsersList, ChatBox } from './chatParts'

const index = ({ user, contacts, chat, inputs, handleSetChatInfo, selectedUser, handlePostNewChatMessage, handleInputChange, handleDeleteNotification, ...props }) => {
  return (
    <Wrapper>
      <SubWrapperAlt width='100%' style={{ justifyContent: 'flex-start' }}>
        <SubWrapper width='980px'>
          <Title>Messenger</Title>
        </SubWrapper>
        <SubWrapper style={{ alignItems: 'flex-start' }}>
          <UsersList userList={contacts}
            handleSetChatInfo={handleSetChatInfo}
            handleInputChange={handleInputChange}
            handleDeleteNotification={handleDeleteNotification}
            inputs={inputs}
          />
          <ChatBox
            chat={chat}
            user={user}
            selectedUser={selectedUser}
            handlePostNewChatMessage={handlePostNewChatMessage}
            handleInputChange={handleInputChange}
            inputs={inputs}
            width='640px' />
        </SubWrapper>
      </SubWrapperAlt>
      {/* {props.text} */}
    </Wrapper>
  )
}

export default index
