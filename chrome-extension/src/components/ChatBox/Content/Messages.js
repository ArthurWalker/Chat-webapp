import React from 'react'
import {Segment,Feed, Message} from 'semantic-ui-react'
import '../../../css/message.css'

class Messages extends React.Component{
    constructor(){
        super()
        this.state={}
    }

    render(){
        return( 
            <div className='message'>
                <Message  compact floating color='olive' size='small'>
                    <p>{this.props.text}</p>
                </Message>
                <p>{this.props.username}</p>
            </div>
           
        )
    }
}

export default Messages