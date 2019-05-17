import React from 'react'
import '../css/extension.css'
import NavBar from './NavBar/NavBar'
import ControlChatBox from './ControlChatBox'

class ChromeExtension extends React.Component{
    render(){
        return(
        <div className='extension'>
            {/*<NavBar/> */}
             <ControlChatBox/>
        </div>)
    }
}

export default ChromeExtension