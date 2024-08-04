/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./Header.css"
import { useState } from "react"
import reactLogo from "../../assets/react.svg"

const Header = ({tabs, changeContent}) => {
    const [tab, setTab] = useState(tabs[0].title)
    

    function onTabClicked(tab){
        setTab(tab.title)
        changeContent(tab)        
    }

    return (
        <header className="header"> 

            <nav className="nav-container">
                <div className="logo-container">
                    <img src={reactLogo} alt="React logo"/>
                    <h1>React</h1>
                </div>
                

                <ul className="nav-list">
                    {tabs.map(tabItem => (
                        <li
                            key={tabItem.title}
                            onClick={() => onTabClicked(tabItem)}
                            className={tabItem.title === tab ? "active" : ""}
                        >
                            {tabItem.title}
                        </li>
                    ))}
                </ul>
            </nav>
    
        </header>
    )
}

export default Header