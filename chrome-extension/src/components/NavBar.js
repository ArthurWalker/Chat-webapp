import React from 'react'
import {Input,Menu,Segment} from 'semantic-ui-react'

class NavBar extends React.Component{
    constructor(){
        super()
        this.state={
            activeItem:''
        }
        this.handleItemClick=this.handleItemClick.bind(this)
    }

    handleItemClick(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    
    render(){
        const activeItem=this.state
        const config={
            padding:'5px'
        }
        return(
            <div>
                <Segment inverted style={config}>
                    <Menu inverted secondary >
                        <Menu.Item name='home' color={'blue'} active={activeItem === 'home'} onClick={this.handleItemClick}/>
                        <Menu.Item><Input icon='search' placeholder='Search...' /></Menu.Item> 
                        <Menu.Menu position='right'> 
                            <Menu.Item name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick}/>
                            <Menu.Item name='friends' active={activeItem === 'friends'} onClick={this.handleItemClick}/>
                            <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick}/>
                        </Menu.Menu>
                    </Menu>
                </Segment>
                 
            </div>
        )
    }
}

export default NavBar