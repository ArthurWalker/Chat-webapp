import React from 'react'
import {Grid,Button} from 'semantic-ui-react'

class HomeButton extends React.Component{
    constructor(props){
        super(props)
        this.state={}
    }

    navigateFacebook(){
        window.location='https://facebook.com'
    }

    navigateGoogle(){
        window.location='https://google.com'
    }

    render(){
        return(
            <Grid divided columns='equal'>
                <Grid.Column textAlign='center'>
                    <Button primary onClick={this.navigateFacebook}>Facebook</Button>
                </Grid.Column>
                <Grid.Column textAlign='center'>
                    <Button negative  onClick={this.navigateGoogle}>Google</Button>
                </Grid.Column>
            </Grid>
        )
    }
}

export default HomeButton