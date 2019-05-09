import React from 'react'
import {Input,Menu,Segment,Popup} from 'semantic-ui-react'
// import axios from 'axios'
import Login2 from './Login2'

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
                        <Menu.Item name='home' active={this.state.activeItem === 'home'} onClick={this.handleItemClick}/>
                        <Menu.Item><Input icon='search' placeholder='Search...' /></Menu.Item> 
                        <Menu.Menu position='right'> 
                            <Menu.Item name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick}/>
                            <Menu.Item name='friends' active={activeItem === 'friends'} onClick={this.handleItemClick}/>
                            <Popup on='click' position='top right'
                                trigger={<Menu.Item name='user' active={activeItem === 'user'} onClick={this.handleItemClick}/>} 
                                content={
                                    <Menu vertical secondary>
                                        <Login2 dataPassToParent={this.dataAfterLoggedIn}/>
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