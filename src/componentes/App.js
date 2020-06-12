import React from 'react'
import Faker from 'faker'

//import Regards from './regards'
import Comments from './comments'
import Button from './button'
//Creacion componente
//
//Componentes Funionales
//const App = () => {
//    return <div>Hola Mundo</div>
//}
//function App(){
//    return <div></div>
//}


//Componente de Clase
class App extends React.Component {
    constructor() {
        super()
        /*this.state = {
            name: 'Alets',
            lastname: 'Fonseca'
        }*/
        //this.ChangeAngelica = this.ChangeAngelica.bind(this)
        //this.ChangeAlejandra = this.ChangeAlejandra.bind(this)
        //this.ChangeJose = this.ChangeJose.bind(this)*
        this.state = {
            comments: []
        }
    }
    /*
    ChangeAngelica(){
        this.setState({name: 'Angelica', lastname: 'Loranca'})
    }
    ChangeAlejandra(){
        this.setState({name: 'Maria Alejandra', lastname: 'Fonseca'})
    }
    ChangeJose(){
        this.setState({name: 'Jose Alejandro', lastname: 'Rojas'})
    }*/
    
    //ChangeState(objectName){
    //    this.setState(objectName)
    //}

    addComment(){
        let comment = {
            userAvatar: Faker.image.avatar(),
            name: Faker.name.firstName,
            date: Date.now().toLocaleString(),
            comment: Faker.lorem.paragraph()
        }
        this.setState({comments: comment})
    }

    render() {
        return (
            <div>
                {/*<h1>
                    Hola {
                        this.state.name + ' ' + this.state.lastname
                    }
                </h1>
                <button onClick={this.ChangeAlejandra}>Alejandra</button>
                <button onClick={this.ChangeAngelica}>Angelica</button>
                <button onClick={this.ChangeJose}>Jose</button>
                <Regards objectName={this.state}/>
                <button onClick={() => this.ChangeState({name: 'Angelica', lastname: 'Loranca'})}>Alejandra</button>
                <button onClick={() => this.ChangeState({name: 'Maria Alejandra', lastname: 'Fonseca'})}>Angelica</button>
                <button onClick={() => this.ChangeState({name: 'Jose Alejandro', lastname: 'Rojas'})}>Jose</button>
                */}
                <Button/>
                {
                    this.state.comments.map((comment) => {
                        return <Comments 
                            name={comment.userAvatar} 
                            userAvatar={comment.name}
                            date={comment.date}
                            comment={comment.comment}
                        />
                    })
                }
                {/*<Comments 
                    name={Faker.name.firstName()} 
                    userAvatar={Faker.image.avatar()}
                    date={Date.now().toLocaleString()}
                    comment={Faker.lorem.paragraph()}
                />*/}
            </div>
        )
    }
}

export default App