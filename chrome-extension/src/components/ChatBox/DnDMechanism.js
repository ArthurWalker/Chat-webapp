import React from 'react'
import {Button} from 'semantic-ui-react'

class DnDMechanism extends React.Component{
    render(){
        return(<div>
            <Button style={{backgroundColor:'blue',color:'yellow'}}>Drag from here</Button>
        </div>)
    }
}

export default DnDMechanism

