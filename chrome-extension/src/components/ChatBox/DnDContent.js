import React from 'react'
import MessageList from './Content/MessageList'
import NewRoomForm from './Content/NewRoomForm'
import RoomList from './Content/RoomList'
import SendForm from './Content/SendForm'
import { Grid } from 'semantic-ui-react'

import Chatkit from '@pusher/chatkit-client'
import {instanceLocator,tokenUrl} from '../../hidden_data'


class DnDContent extends React.Component{
    constructor(){
        super()
        this.state={
            messages:[]
        }
        this.sendMessage=this.sendMessage.bind(this)
    }

    componentDidMount(){
        const chatManager = new Chatkit.ChatManager({
            instanceLocator,
            userId:'arthur',
            tokenProvider: new Chatkit.TokenProvider({
                url: tokenUrl
            })
        })

        chatManager.connect()
        .then(currentUser => {
            this.currentUser=currentUser
            this.currentUser.subscribeToRoom({
                roomId:"19396318",
                messageLimit:20,
                hooks:{
                    onNewMessage:message => {
                        console.log('message.text',message.text)
                        this.setState({messages:[...this.state.messages,message]})
                    }
                }
            })
        })
    }

    sendMessage(text){
        console.log(text)
        this.currentUser.sendMessage({
            text:text,
            roomId:"19396318"
        })
    }

    render(){
        console.log('this.state.messages:',this.state.messages)
        return(<div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={8}>
                        <RoomList/>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <MessageList messageList={this.state.messages}/>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                    <Grid.Column width={8}>
                        <NewRoomForm/>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <SendForm sendMessage={this.sendMessage}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>)
    }
}

export default DnDContent