import React from 'react'
import MessageList from './Content/MessageList'
import NewRoomForm from './Content/NewRoomForm'
import RoomList from './Content/RoomList'
import SendForm from './Content/SendForm'
import {Container,Button,Grid,Label, Image, Checkbox} from 'semantic-ui-react'
import  '../../css/chat_container.css'
import Chatkit from '@pusher/chatkit-client'
import {instanceLocator,tokenUrl} from '../../hidden_data'


class DnDContent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            messages:[],
            joinableRooms:[],
            joinedRooms:[],
            roomId:'',
            undraggable:true
        }
        this.sendMessage=this.sendMessage.bind(this)
        this.subcribeToRoom=this.subcribeToRoom.bind(this)
        this.getRoom=this.getRoom.bind(this)
        this.createRoom=this.createRoom.bind(this)
        this.resetMessageList = this.resetMessageList.bind(this)
    }

    resetMessageList(){
        this.setState({roomId:''})
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
            this.getRoom()
            //this.subcribeToRoom()
        })
    }

    getRoom(){
        this.currentUser.getJoinableRooms()
        .then(joinableRooms => {
            this.setState({
            joinableRooms,
            joinedRooms: this.currentUser.rooms
            })
        })
        .catch(err=>console.log('error on joinableRooms: ',err))
    }

    subcribeToRoom(roomId){
        this.setState({messages:[]})
        this.currentUser.subscribeToRoomMultipart({
            roomId:roomId,
            messageLimit:15,
            hooks:{
                onMessage: message => {
                    //console.log("received message", message.parts[0].payload.content)
                    this.setState({messages:[...this.state.messages,message]})
                    }
            }
        })
        .catch(err=>console.log('error on conneting: ',err))
        .then(room =>{
            this.setState({roomId:room.id})
            this.getRoom()
        })
        .catch(err => console.log('error on subcribing to room',err))
    }

    sendMessage(text){
        //console.log(text)
        this.currentUser.sendMessage({
            text:text,
            roomId:this.state.roomId
        })
    }
 
    createRoom(roomName){
        this.currentUser.createRoom({
            name:roomName
        })
        .then(room =>this.subcribeToRoom(room.id))
        .catch(err => console.log('error to create a new room',err))
    }


    render(){
        //console.log('this.state.messages:',this.state.messages)
        if (this.state.messages)
        return(
            <span className='chat-container'>
                <div className='top'>
                    <Label attached='top' color={this.props.undraggable ? 'yellow':'green'} onClick={this.props.undraggableCallback} >
                        <p>Click to {this.props.undraggable ? 'enable':'disable'} the dragging mechanism
                            {/* <Checkbox style={{float:'right'}} toggle /> */}
                        </p>
                    </Label>
                </div>
                <div className='bottom'>
                    <div className='lower-left'>
                        <div className='upper' >
                            <div className='profile-pic' ><Image centered src='https://cdn2.iconfinder.com/data/icons/budicon-user/16/32-user_-_single-512.png' size='tiny'/></div>
                            <RoomList running_roomId={this.props.roomId} subcribeToRoom={this.subcribeToRoom} rooms={[...this.state.joinableRooms, ...this.state.joinedRooms]}/> 
                        </div>
                        <div className='lower' >
                            <NewRoomForm createRoom={this.createRoom}/>
                        </div>
                    </div>
                    <div className='lower-right'>
                        <div className='upper'  >
                            <MessageList roomId={this.state.roomId} messageList={this.state.messages}/>
                        </div>
                        <div className='lower'>
                            <SendForm disabled={!this.state.roomId} sendMessage={this.sendMessage}/>
                        </div>
                    </div>
                </div>
                {this.state.roomId && <Button primary onClick={this.resetMessageList}>Reset message list</Button>} 
                        
            </span>
             
            // <RoomList running_roomId={this.props.roomId} subcribeToRoom={this.subcribeToRoom} rooms={[...this.state.joinableRooms, ...this.state.joinedRooms]}/>
            // <MessageList roomId={this.state.roomId} messageList={this.state.messages}/>
            // {this.state.roomId && <Button primary onClick={this.resetMessageList}>Reset message list</Button>}
            // <NewRoomForm createRoom={this.createRoom}/>
            // <SendForm disabled={!this.state.roomId} sendMessage={this.sendMessage}/>
           )
    }
}

export default DnDContent