import React from 'react'
import {Segment} from 'semantic-ui-react'
import '../../../css/message.css'

class Message extends React.Component{
    constructor(){
        super()
        this.state={}
    }

    render(){
        return( 
            <div>
                <Segment className='message' compact inverted color='yellow' floated='right'>
                    <div className='message-text'>{this.props.text}</div>
                </Segment>
                <div className='message-username'>{this.props.username}</div>

            </div>
        )
    }
}

export default Message