import React from 'react'
import { Form } from 'react-bootstrap'

class InputComment extends React.Component {
    constructor(props) {
        super()
        //this.state = {
        //    comment: props.handlerTextArea
        //}
        //this.handlerTextArea = this.handlerTextArea.bind(this)
    }

    /*handlerTextArea(event){
        console.log(event.target.value)
        this.setState({text: event.target.value.toUpperCase()})
    }*/

    render() {
        return (
            <Form>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control
                        as="textarea"
                        rows="12"
                        cols="30"
                        onChange={this.props.handler}
                        value={this.props.value} />
                </Form.Group>
            </Form>
        )
    }
}
    export default InputComment