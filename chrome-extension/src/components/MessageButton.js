import React from 'react'
import axios from 'axios'

class MessageButton extends React.Component{
    constructor(props){
        super(props)
        this.state={}
    }

    render(){
        return(<div>
            <h1>Facebook User:</h1>
            {this.props.dataFromNav!==null && <div>{JSON.stringify(this.props.dataFromNav)}</div>}
        </div>)
    }
}

export default MessageButton
