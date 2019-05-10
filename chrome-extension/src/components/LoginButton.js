import React from 'react'
import firebase from 'firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import hidden_data from '../hidden_data'
import {Button,Image,Grid} from 'semantic-ui-react'

firebase.initializeApp({
    apiKey:hidden_data.apiKey,
    authDomain:hidden_data.authDomain
})

class LoginButton extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isLoggedIn: false,
            userData:{}
        }
        this.uiConfig = {
            signInFlow:'popup',
            signInOptions: [
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                firebase.auth.FacebookAuthProvider.PROVIDER_ID
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
            this.setState({userData:user})
            this.props.dataPassToParent(this.state.userData)
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
                        <Grid>
                            <Grid.Row columns={2}>
                                <Grid.Column>
                                    <Image alt='profile picture' src={firebase.auth().currentUser.photoURL} circular />
                                </Grid.Column>
                                <Grid.Column>
                                    <Button positive onClick={this.handleSignOut}>Sign out</Button>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>                                
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

export default LoginButton
