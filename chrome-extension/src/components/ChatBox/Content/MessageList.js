import React from 'react'
import Messages from './Messages'
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
            <p className="join-room">
                &larr; Join a room!
            </p>)
        }
        return(
        <div className='message-list'>
            {this.props.messageList.map((message,index)=>{
                return (<Messages key={index} username={message.senderId} text={message.parts[0].payload.content}/>)
            })}
        </div>)
    }
}

export default MessageList

