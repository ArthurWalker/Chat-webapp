import React from 'react'
import {Input,Menu,Segment,Popup} from 'semantic-ui-react'
// import axios from 'axios'
import Login2 from './Login2'

class NavBar extends React.Component{
    constructor(){
        super()
        this.state={
            activeItem:'',
            isLoading:false,
        }
        this.handleItemClick=this.handleItemClick.bind(this)
    }


    handleItemClick(event,{name}){
        this.setState({
            activeItem:name
        })
    }

    render(){
        const activeItem=this.state.activeItem
        const config={
            padding:'5px'
        }
        
        console.log(activeItem)
        return(
            <div>
                <Segment inverted style={config}>
                    <Menu inverted secondary >
                        <Menu.Item name='home' active={this.state.activeItem === 'home'} onClick={this.handleItemClick}/>
                        <Menu.Item><Input icon='search' placeholder='Search...' /></Menu.Item> 
                        <Menu.Menu position='right'> 
                            <Menu.Item name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick}/>
                            <Menu.Item name='friends' active={activeItem === 'friends'} onClick={this.handleItemClick}/>
                            <Popup on='click' position='top right'
                                trigger={<Menu.Item name='platform' active={activeItem === 'platform'} onClick={this.handleItemClick}/>} 
                                content={
                                    <Menu vertical secondary>
                                        <Login2/>
                                    </Menu>
                                } 
                            />
                        </Menu.Menu>
                    </Menu>
                </Segment>
            </div>
        )
    }
}

export default NavBar