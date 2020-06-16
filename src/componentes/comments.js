import React from 'react'
import { date } from 'faker'
//import Faker from 'faker'

class Comments extends React.Component {
    constructor(props){
        super()
        this.state = {
            //userAvatar: Faker.image.avatar(),
            //name: Faker.name.firstName(),
            //date: Date.now().toLocaleString(),
            //comment: Faker.lorem.paragraph()
            userAvatar: props.userAvatar,
            name: props.name,
            date: props.date,
            comment: props.comment
        }
    }

    componentWillMount(){
        console.log('Antes del renderizado')
    }

    /*UNSAFE_componentWillMount(){
        console.log('Antes del renderizado')
    }*/

    componentDidMount(){
        console.log('Despues del renderizado')
        //alert('Creacte un comentario')
    }

    componentWillReceiveProps(nextProps){
        console.log('Recibir props', nextProps)
    }

    componentWillUpdate(nextProps, nextState){
        console.log('componente se va a actualizar')
    }

    componentDidUpdate(prevProps, prevState){
        console.log('componente se actualiza', prevProps, prevState)
    }

    componentWillUnmount(){
        console.log('Componente Borrado')
    }

    render(){
        return (
            <div className="ui comments">
                <div className="comment">
                    <div className="avatar">
                        {/*<img src={Faker.image.avatar()} alt='Imagen de usuario'/>
                        <img src={this.state.userAvatar} alt='Imagen de usuario'/>*/}
                        <img src={this.props.userAvatar} alt='Imagen de usuario'/>
                    </div>
                    <div className="content">
                        {/*<a className="author">{Faker.name.firstName}</a>*/}
                        <div className="author">{this.state.name}</div>
                        <div className="metadata">
                            {/*<div className="date">{Date.now().toLocaleString()}</div>*/}
                            <div className="date">{this.state.date}</div>
                        </div>
                        {/*<div className="text">{Faker.lorem.paragraph()}</div>*/}
                        <div className="text">{this.state.comment}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Comments