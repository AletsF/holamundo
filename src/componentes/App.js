import React from 'react'
import Faker from 'faker'

//import Regards from './regards'
import Comments from './comments'
import Button from './button'
import InputComment from './inputComment'
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
            comments: [],
            commentText: '',
            name: ''
        }
        this.addComment = this.addComment.bind(this)
        this.deleteComment = this.deleteComment.bind(this)
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
            //name: Faker.name.firstName(),
            name: this.state.name,
            date: Date.now().toLocaleString(),
            //comment: Faker.lorem.paragraph()
            comment: this.state.commentText

        }
        console.log('state', this)
        //let copyState = {...this.state.comments, comments: this.state.comments.push(comment)}
        let copyState = this.state.comments
        copyState.push(comment)
        //this.setState({comments: comment})
        //this.setState({comments: copyState})
        this.setState({comments: copyState})
        this.setState({commentText: ''})
    }

    deleteComment(){
        /*let copyState = this.state.comments
        copyState.pop()
        this.setState({comments: copyState})*/
        let copyComments = this.state.comments
        copyComments.pop()
        let copyState = {...this.state.comments, comments: copyComments}
        this.setState(copyState)
    }

    handlerComment(e){
        this.setState({commentText: e.target.value})
    }

    handlerName(e){
        this.setState({name: e.target.value})
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
                
                <Button/>*/}
                <InputComment handler={(e) => this.handlerName(e)} value={this.state.name}></InputComment>
                <InputComment handler={(e) => this.handlerComment(e)} value={this.state.commentText}></InputComment>
                <Button func={this.addComment} text={'Comentar'}/>
                <Button func={this.deleteComment} text={'Borrar'}/>
                {
                    this.state.comments.map((comment) => {
                        return <Comments
                            key={comment.name} 
                            userAvatar={comment.userAvatar} 
                            name={comment.name}
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