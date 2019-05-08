// rcc -> tab for quick class based component

import React from 'react'
import hidden_data from '../hidden_data'
import {Image,Button} from 'semantic-ui-react'
import FacebookLogin from 'react-facebook-login';

class LoginFacebook extends React.Component{
    constructor(){
        super()
        this.state={
            isLoading:false,
            isLogin:false,
            userID:'',
            name:'',
            email:'',
            picture:''
        }
        this.responseFacebook = this.responseFacebook.bind(this)
        this.componentClicked = this.componentClicked.bind(this)
    }

    componentClicked(){
        console.log('Clicked')
    }   

    responseFacebook(response){
        console.log(response)
    }

    render(){
        let fbContent
        
        if (this.state.isLogin){
            fbContent=(
                <Image src={this.state.picture} alt={this.state.name} size='tiny' circular />
            )
        }else{
            fbContent = (<FacebookLogin
                appId={hidden_data.fb_appID}
                autoLoad={true}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook} 
                cssClass="my-facebook-button-class"
                />)
        }

        return(
            <div>
                {fbContent}
            </div>
        )
    }
}

export default LoginFacebook