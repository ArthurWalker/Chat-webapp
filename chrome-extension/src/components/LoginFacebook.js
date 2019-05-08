// rcc -> tab for quick class based component

import React from 'react'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import hidden_data from '../hidden_data'
import {Image,Button} from 'semantic-ui-react'

class LoginFacebook extends React.Component{
    constructor(){
        super()
        this.state={
            isLogin:false,
            userID:'',
            name:'',
            email:'',
            picture:''
        }
        this.responseFacebook = this.responseFacebook.bind(this)
    }

    componentClicked(){
        console.log('Clicked')
    }

    responseFacebook(response){
        console.log(response)
        this.setState({
            isLogin:true,
            userID:response.userID,
            email:response.email,
            name:response.name,
            picture:response.picture
        })
        
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
                autoLoad
                callback={this.responseFacebook}
                render={renderProps => (
                  <Button primary onClick={renderProps.onClick}>Login Facebook</Button>
                )}
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