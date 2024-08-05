/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react"
import "./Tabs.css"

const Tabs = ({tabs, setContent}) => {
    const [activeTab, setActiveTab] = useState(tabs[0].title)

    function onTabClicked(tab){
        setContent(tab)
        setActiveTab(tab.title)
    }
    

    return (
        <nav className="nav-container"> 
            <ul className="nav-list-container">
                {tabs.map(tabItem => (
                    <li
                        key={tabItem.key}
                        onClick={() => onTabClicked(tabItem)}
                        className={tabItem.title === activeTab ? 'active' : ''}
                    >
                        {tabItem.title}
                    </li>
                ))}
            </ul>
        </nav>

    )
}

export default Tabs