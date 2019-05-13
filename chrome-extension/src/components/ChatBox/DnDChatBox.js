import React from 'react'
import Draggable from 'react-draggable'
import DnDContent from './DnDContent'
import DnDMechanism from './DnDMechanism'

class DnDChatBox extends React.Component{
    constructor(){
        super()
        this.state={}
    }

    eventLogger = (e, data) => {
        console.log('Event: ', e);
        console.log('Data: ', data);
      };
     
      render() {
        return (
          <Draggable
            allowAnyClick={true}
            axis="both"
            handle=".handle"
            defaultPosition={{x: 100, y: 100}}
            position={null}
            grid={[25, 25]}
            scale={1}
            onStart={this.handleStart}
            onDrag={this.handleDrag}
            onStop={this.handleStop}>
            <div style={{display:'block'}} >
                <div className="handle" style={{width:'150px'}}>
                    <DnDMechanism/>
                </div>
                <div style={{backgroundColor:'green',width:'800px'}}><DnDContent/></div>
            </div>
          </Draggable>
        );
      }
}

export default DnDChatBox