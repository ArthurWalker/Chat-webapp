import React from 'react'
import Message from './Message'

class MessageList extends React.Component{
    render(){
        return(
        <div className='message-list'>
            <h1>MessageList</h1>
                {this.props.messageList.map((message,index)=>{
                    return (<Message key={index} username={message.senderId} text={message.parts[0].payload.content}/>)
                })}
        </div>)
    }
}

export default MessageList

