import React from 'react'

class Button extends React.Component{
    constructor(props){
        super()
    }

    render(){
        return(
            //<button class="ui primary button">               
            <button onClick={this.props.func} class="ui primary button">
                 {/*Comentar*/}
                 {this.props.text}
            </button>
        )

    }
}

export default Button