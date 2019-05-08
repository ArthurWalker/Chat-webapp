import React from 'react'
import {Menu,Button} from 'semantic-ui-react'
import LoginFacebook from './LoginFacebook'

class Platform extends React.Component {
    constructor(){
        super()
        this.state={
            activeItem:'',
            isLoading:false
        }
        this.handleItemClick = this.handleItemClick.bind(this)
    }

    handleItemClick(event,{name}){
        this.setState({activeItem:name})
    }

    render(){
        const activeItem=this.state.activeItem
        
        console.log(activeItem)
        return(
            <Menu vertical>
                <Menu.Item name='gmail' active={activeItem==='gmail'} onClick={this.handleItemClick}>
                    <Button negative>Log in Gmail</Button>
                </Menu.Item>
                <Menu.Item name='facebook' active={activeItem==='facebook'} onClick={this.handleItemClick}>
                    <LoginFacebook/>
                </Menu.Item>
                <Menu.Item name='twitter' active={activeItem==='twitter'} onClick={this.handleItemClick}>
                    <Button positive>Log in Twitter</Button>
                </Menu.Item>
            </Menu>
        )
    }
}

export default Platform