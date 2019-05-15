import React from 'react'
import {Form} from 'semantic-ui-react'
import '../../../css/send_form.css'

class SendForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            message:''
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    handleChange(e){
        this.setState({message:e.target.value})
    }

    handleSubmit(e){
        e.preventDefault()
        this.props.sendMessage(this.state.message)
        this.setState({message:''})
    }

    render(){
        return(
        <div className='send-form'>
            <Form onSubmit={this.handleSubmit} >
                <Form.Field>
                    <Form.Input disabled={this.props.disabled} placeholder='Message...' value={this.state.message} name='text' type='text' onChange={this.handleChange}/>
                </Form.Field>
            </Form>
        </div>)
    }
}

export default SendForm

