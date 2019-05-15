import React from 'react'
import DnDContent from './DnDContent'
import {Rnd} from 'react-rnd'

class DnDChatBox extends React.Component{
    constructor(){
        super()
        this.state={
          undraggableShown:true,
        }
        this.handleChildClick = this.handleChildClick.bind(this)
    }

    handleChildClick() {
      this.setState({undraggableShown:!this.state.undraggableShown})
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
        const config= {x:0,y:0}
        return (
          <Rnd style={style} default={config} disableDragging={this.state.undraggableShown}>
            <DnDContent undraggable={this.state.undraggableShown} undraggableCallback={this.handleChildClick}/>
          </Rnd>
        );
      }
}

export default DnDChatBox