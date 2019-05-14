import React from 'react'
import '../css/extension.css'
import NavBar from './NavBar/NavBar'
import DnDChatBox from './ChatBox/DnDChatBox'
class ChromeExtension extends React.Component{
    render(){
        return(
        <div className='extension'>
            <NavBar/>
            <DnDChatBox/>
 
        </div>)
    }
}

export default ChromeExtension