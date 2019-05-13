import React from 'react'
import firebase from 'firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import sensitive_data from '../../hidden_data'
import {Button,Image,Segment} from 'semantic-ui-react'

firebase.initializeApp({
    apiKey:sensitive_data.apiKey,
    authDomain:sensitive_data.authDomain
})

class Login2 extends React.Component{
    constructor(){
        super()
        this.state={
            isLoggedIn: false
        }
        this.uiConfig = {
            signInFlow:'popup',
            signInOptions: [
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                firebase.auth.FacebookAuthProvider.PROVIDER_ID,
                firebase.auth.EmailAuthProvider.PROVIDER_ID
            ],
            callbacks:{
                signInSuccess:()=>false
            }
        }
        this.componentDidMount = this.componentDidMount.bind((this))
    }

    componentDidMount(){
        firebase.auth().onAuthStateChanged(user=>{
            this.setState({isLoggedIn:!!user})
            console.log(user)
        })
    }

    handleSignOut(){
        firebase.auth().signOut()
    }

    render(){
        return(<div>
            {
                this.state.isLoggedIn ? 
                    (   
                    <div>
                        <h1>{firebase.auth().currentUser.displayName}</h1>    
                        <Image src={firebase.auth().currentUser.photoURL}/>
                        <Button onClick={this.handleSignOut}>Sign out</Button>
                    </div>
                    ):
                    (
                        
                        <StyledFirebaseAuth 
                        uiConfig = {this.uiConfig}
                        firebaseAuth = {firebase.auth()}/>
                    
                    )
            }
       </div>)
    }
}

export default Login2
