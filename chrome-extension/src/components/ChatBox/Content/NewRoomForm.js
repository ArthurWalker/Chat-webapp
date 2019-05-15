import React from 'react'
import {Form} from 'semantic-ui-react'
import '../../../css/room_form.css'

class NewRoomForm extends React.Component{

    constructor(){
        super()
        this.state={
            roomName:''
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    handleChange(e){
        this.setState({
            roomName:e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault()
        this.props.createRoom(this.state.roomName)
        this.setState({roomName:''})
    }

    render(){
        return(
        <div className='room-form'>
            <Form onSubmit={this.handleSubmit} >
                <Form.Field>
                    <Form.Input  placeholder='Create a new room' value={this.state.roomName} required name='text' type='text' onChange={this.handleChange}/>
                </Form.Field>
            </Form>
        </div>)
    }
}

export default NewRoomForm

