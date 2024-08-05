import Logo from './Logo/Logo'
import Tabs from "./Tabs/Tabs"
import { useState } from 'react'
import './TabsNavigation.css'
import Paragraph from './Paragraph/Paragraph'

const TabsNavigation = () => {
    const [tabsList] = useState([
        { key: 1, title: 'Home', content: [<li key={1}>Conteúdo da Home 1</li>, <li key={2}>Conteúdo da Home 2</li>] },
        { key: 2, title: 'Sobre', content: [<li key={1}>Conteúdo Sobre 1</li>, <li key={2}>Conteúdo Sobre 2</li>] },
        { key: 3, title: 'Contato', content: [<li key={1}>Conteúdo de Contato 1</li>, <li key={2}>Conteúdo de Contato 2</li>] },
        { key: 4, title: 'Ajuda', content: [<li key={1}>Conteúdo de Ajuda 1</li>, <li key={2}>Conteúdo de Ajuda 2</li>] },
    ]);
    const [content, setContent] = useState(tabsList[0].content)

    function changeContent(tab){
        setContent(tab.content)
    }

    return(
        <main>
            <Logo />
            <Tabs tabs={tabsList} setContent={changeContent}/>
            <Paragraph paragraphContent={content}/>
        </main>
    )
}

export default TabsNavigation