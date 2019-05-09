import React from 'react'
import {Input,Menu,Segment,Popup,Grid} from 'semantic-ui-react'
// import axios from 'axios'
import LoginButton from './LoginButton'
import HomeButton from './HomeButton'
import MessageButton from './MessageButton'
import FriendButton from './FriendButton'

class NavBar extends React.Component{
    constructor(props){
        super(props)
        this.state={
            activeItem:'',
            isLoading:false,
            dataAfterLoggedIn:null
        }
        this.handleItemClick=this.handleItemClick.bind(this)
        this.dataAfterLoggedIn = this.dataAfterLoggedIn.bind(this)
    }

    handleItemClick(event,{name}){
        this.setState({
            activeItem:name
        })
    }

    dataAfterLoggedIn(dataFromLoggedIn){
        this.setState({dataAfterLoggedIn:dataFromLoggedIn})
    }

    render(){
        const {activeItem,isLoading,dataAfterLoggedIn}=this.state
        const config={
            padding:'5px'
        }
        
        console.log(this.state.dataAfterLoggedIn)
        return(
            <div>
                <Segment inverted style={config}>
                    <Menu inverted secondary >
                        {dataAfterLoggedIn && 
                        <Popup on = 'click' position='top left'
                            trigger={<Menu.Item name='home' active={this.state.activeItem === 'home'} onClick={this.handleItemClick}></Menu.Item>}
                            content={<HomeButton/>}
                        />}
                        
                        {dataAfterLoggedIn && <Menu.Item><Input icon='search' placeholder='Search...' /></Menu.Item> }
                        
                        <Menu.Menu position='right'> 
                            {dataAfterLoggedIn && 
                            <Popup on='click' position='top center'
                                trigger={<Menu.Item name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick}/>}
                                content={<MessageButton/>}
                            />}
                                
                            {dataAfterLoggedIn && 
                            <Popup on='click' position='top center'
                                trigger={<Menu.Item name='friends' active={activeItem === 'friends'} onClick={this.handleItemClick}/>}
                                content={<FriendButton/>}
                            />}

                            <Popup on='click' position='top right'
                                trigger={<Menu.Item name='user' active={activeItem === 'user'} onClick={this.handleItemClick}/>} 
                                content={
                                    <Menu vertical secondary>
                                        <LoginButton dataPassToParent={this.dataAfterLoggedIn}/>
                                    </Menu>
                                } 
                            />
                        </Menu.Menu>
                    </Menu>
                </Segment>
               {dataAfterLoggedIn!==null && <div>{JSON.stringify(dataAfterLoggedIn)}</div>}
            </div>
        )
    }
}

export default NavBar