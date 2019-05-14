import React from 'react'
import DnDContent from './DnDContent'
import {Rnd} from 'react-rnd'
import { Label, Grid} from 'semantic-ui-react'

class DnDChatBox extends React.Component{
    constructor(){
        super()
        this.state={
          undraggable:true,
        }
        this.handleButtonPress = this.handleButtonPress.bind(this)
    }

    handleButtonPress () {
      this.setState({undraggable:!this.state.undraggable})
    }
  

    eventLogger = (e, data) => {
        console.log('Event: ', e);
        console.log('Data: ', data);
      };
     
      render() {
        const style= {
          //display: "flex",
          alignItems: "center",
          //justifyContent: "center",
          border: "solid 1px #ddd",
          background: "#f0f0f0",
        }
        const config= {
          x: 100,
          y: 500,
        }
        console.log(this.state.undraggable)
        return (
          <Rnd style={style} default={config} disableDragging={this.state.undraggable}>
        
                <Label attached='top' color={this.state.undraggable ? 'yellow':'green'} onClick={this.handleButtonPress}>
                  Click to {this.state.undraggable ? 'enable':'disable'} the dragging mechanism
                </Label>
             
                <DnDContent/>
          </Rnd>
        );
      }
}

export default DnDChatBox