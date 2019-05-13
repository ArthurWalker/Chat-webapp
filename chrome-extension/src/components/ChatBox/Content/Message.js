import React from 'react'

class Message extends React.Component{
    constructor(){
        super()
        this.state={}
    }

    render(){
        return( 
        <div className='message'>
            <div className='message-username'>{this.props.username}</div>
            <div className='message-text'>{this.props.text}</div>
        </div>
        )
    }
}

export default Message