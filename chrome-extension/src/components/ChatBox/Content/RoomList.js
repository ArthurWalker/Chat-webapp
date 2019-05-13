import React from 'react'
import {List} from 'semantic-ui-react'



class RoomList extends React.Component{
    render(){

        const orderedRooms=[...this.props.rooms].sort((a,b)=>a.id-b.id)
        const active_style={
            color:'red',
            size:'10px'
        }
        // console.log(this.props.rooms)
        return(<div>
            <h1>Room List</h1>
            <List link>
                {orderedRooms.map((room,index) =>{
                    const active = this.props.roomId === room.id ? 'active':''
                    return(
                    <List.Item as='a' style={active !== '' ? active_style:{}} onClick={()=>{this.props.subcribeToRoom(room.id)}} key={index}>
                        {room.name}
                    </List.Item>)
                })}
            </List>
        </div>)
    }
}

export default RoomList

