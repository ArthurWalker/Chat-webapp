import React from 'react'
import {Form,Button} from 'semantic-ui-react'

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
        return(<div>
            <h1>SendForm</h1>
            <Form onSubmit={this.handleSubmit} >
                <Form.Field>
                    <Form.Input  placeholder='Message...' value={this.state.message} name='text' type='text' onChange={this.handleChange}/>
                </Form.Field>
            </Form>
        </div>)
    }
}

export default SendForm

