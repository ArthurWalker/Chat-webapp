import React from 'react'
import {Segment,Feed, Message, Label} from 'semantic-ui-react'
import '../../../css/message.css'

class Messages extends React.Component{
    constructor(){
        super()
        this.state={}
    }

    render(){
        return( 
            <div className='message'>
                <div className='message-box' style={{float:this.props.currentUser === this.props.username ? 'right':'left'}}>
                    <p className='message-content'>{this.props.text}</p>
                    <p className='message-user'>{this.props.username}</p> 
                </div>
                <br/>
            </div>
           
        )
    }
}

export default Messages