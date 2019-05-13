import React from 'react'
import Message from './Message'

class MessageList extends React.Component{
    render(){
        return(
        <div className='message-list'>
            <h1>MessageList</h1>
                {this.props.messageList.map((message,index)=>{
                    return (<Message key={index} username={message.id} text={message.text}/>)
                })}
        </div>)
    }
}

export default MessageList

