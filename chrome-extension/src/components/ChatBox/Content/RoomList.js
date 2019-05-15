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
        return(
        <div className='room-list'>
            <List link divided verticalAlign='middle'>
                {orderedRooms.map((room,index) =>{
                    const active = this.props.roomId === room.id ? 'active':''
                    return(
                    <List.Item as='a' style={active !== '' ? active_style:{}} onClick={()=>{this.props.subcribeToRoom(room.id)}} key={index}>
                        <List.Content>
                            <List.Header>{room.name}</List.Header>
                        </List.Content>
                    </List.Item>)
                })}
            </List>
        </div>)
    }
}

export default RoomList

