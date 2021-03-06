import React, {Component} from 'react';
import Message from './Message.jsx'
import SystemMessage from './SystemMessage.jsx'


const renderMessage = (message) => {

//NEW USER notification
  if (message.type === 'system') {
    return (
      <SystemMessage
        key={message.id}
        username={message.username}
        content={message.content}
      />
    )
//NEW MESSAGE
  } else {
    return (
      <Message
        key={message.id}
        username={message.username}
        content={message.content}
      />
    )
  }
}

const MessageList = (props) => (
 <main className="messages">
 {props.messages.map((message) =>  renderMessage(message))}
  </main>
  )

export default MessageList;


