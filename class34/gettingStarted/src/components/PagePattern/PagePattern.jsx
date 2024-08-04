/* eslint-disable no-unused-vars */
import "./PagePattern.css"
import { useState } from "react"
import Header from "../Header/Header"
import Content from "../Content/Content"
import Footer from "../Footer/Footer"

const PagePattern = () => {
    const [tabsList] = useState([
        { title: 'Home', content: <div>Conteúdo da Home</div> },
        { title: 'Sobre', content: <div>Conteúdo Sobre</div> },
        { title: 'Contato', content: <div>Conteúdo de Contato</div> },
        { title: 'Ajuda', content: <div>Conteúdo de Ajuda</div> },
    ])
    const [tab, setTab] = useState(tabsList[0].title)
    const [tabContent, setTabContent] = useState(tabsList[0].content)


    function getTab(tab){
        setTab(tab.title)
        setTabContent(tab.content)
    }

    return(
        <body>
            <Header
                tabs={tabsList}
                changeContent={getTab}
            />

            <Content
                contentText={tabContent}
            />

            <Footer link="https://github.com/Yasmin-Carloto" developer="Yasmin Carlôto"/>
        </body>
    )
}

export default PagePattern