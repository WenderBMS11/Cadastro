import React from 'react'
import './Main.css'
import Header from './Header'
//Main será nosso executável
export default props =>/*componente pode retornar múltiplos
elementos. Os Fragmentos permitem agrupar uma lista
de filhos sem adicionar nós extras ao DOM. PARA USARMOS O HEADER*/
    <React.Fragment>
        <Header />
        <main className = "content">
            conteúdo
        </main>
    </React.Fragment>