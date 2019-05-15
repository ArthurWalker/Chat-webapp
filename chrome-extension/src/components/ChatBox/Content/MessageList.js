import React from 'react'
import Message from './Message'
import ReactDom from 'react-dom'
import '../../../css/message_list.css'

class MessageList extends React.Component{

    componentDidUpdate(){
        const node = ReactDom.findDOMNode(this)
        node.scrollTop=node.scrollHeight
    }

    render(){
        if (!this.props.roomId){
            return(
            <div className="message-list">
                <div className="join-room">
                    &larr; Join a room!
                </div>
            </div>)
        }
        return(
        <div className='message-list'>
            {this.props.messageList.map((message,index)=>{
                return (<Message key={index} username={message.senderId} text={message.parts[0].payload.content}/>)
            })}
        </div>)
    }
}

export default MessageList

