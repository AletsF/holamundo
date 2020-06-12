import React from 'react'
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

    render(){
        return (
            <div className="ui comments">
                <div className="comment">
                    <a className="avatar">
                        {/*<img src={Faker.image.avatar()} alt='Imagen de usuario'/>
                        <img src={this.state.userAvatar} alt='Imagen de usuario'/>*/}
                        <img src={this.props.userAvatar} alt='Imagen de usuario'/>
                    </a>
                    <div className="content">
                        {/*<a className="author">{Faker.name.firstName}</a>*/}
                        <a className="author">{this.state.name}</a>
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