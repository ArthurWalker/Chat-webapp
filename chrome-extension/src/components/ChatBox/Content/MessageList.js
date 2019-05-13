import React from 'react'
import Message from './Message'
import ReactDom from 'react-dom'

class MessageList extends React.Component{

    componentDidUpdate(){
        const node = ReactDom.findDOMNode(this)
        node.scrollTop=node.scrollHeight
    }

    render(){
        if (!this.props.roomId){
            return(<div className="message-list">
            <div className="join-room">
                &larr; Join a room!
            </div>
        </div>)
        }
        return(
        <div className='message-list' style={{height:'180px',overflowY: 'scroll'}}>
            <h1>MessageList</h1>
                {this.props.messageList.map((message,index)=>{
                    return (<Message key={index} username={message.senderId} text={message.parts[0].payload.content}/>)
                })}
        </div>)
    }
}

export default MessageList

