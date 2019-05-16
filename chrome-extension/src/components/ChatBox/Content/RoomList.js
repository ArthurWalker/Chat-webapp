import React from 'react'
import {Container, Icon, List} from 'semantic-ui-react'
import '../../../css/room_list.css'

class RoomList extends React.Component{
    render(){

        const orderedRooms=[...this.props.rooms].sort((a,b)=>a.id-b.id)
        const active_style={
            color:'red',
            size:'10px'
        }
        // console.log(this.props.rooms)
        return(
        <Container className='room-list'>
            <List className='list' link relaxed celled>
                {orderedRooms.map((room,index) =>{
                    const active = this.props.roomId === room.id ? 'active':''
                    return(
                    <List.Item as='a' style={active !== '' ? active_style:{}} onClick={()=>{this.props.subcribeToRoom(room.id)}} key={index}>
                        <Icon name='github' size='large'   />
                        <List.Content>
                            <List.Header>{room.name}</List.Header>
                        </List.Content>
                    </List.Item>)
                })}
            </List>
        </Container>)
    }
}

export default RoomList

