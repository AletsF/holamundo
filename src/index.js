//Importacion de modulos y librerias
import React from 'react'
import ReactDom from 'react-dom'

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
    }
    render() {
        return (
            <div>
                <h1>
                    Hola
                </h1>
                <h2>
                    Mundo
                </h2>
            </div>
        )
    }
}

//Renderizado de componente
ReactDom.render(
    <App />,
    document.querySelector('#root')
)