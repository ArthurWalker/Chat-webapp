import React from 'react'
import '../css/extension.css'
import NavBar from './NavBar'

class ChromeExtension extends React.Component{
    render(){
        return(
        <div className='extension'>
            <NavBar/>
        </div>)
    }
}

export default ChromeExtension