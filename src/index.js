//Importacion de modulos y librerias
import React from 'react'
import Faker from 'faker'
import ReactDom from 'react-dom'

import App from './componentes/App'

//Renderizado de componente
ReactDom.render(
    <App />,
    document.querySelector('#root')
)