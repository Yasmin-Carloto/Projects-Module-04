/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const LanguageContext = createContext({language: 'english', toggleLanguage: () => {}})
export const LanguageProvider = (props) => {
    const [language, setlanguage] = useState("english")
    const toggleLanguage = () => {
        setlanguage(currTheme => currTheme === "english" ? "portuguese" : "english")
    }

    return (
        <LanguageContext.Provider value={{language, toggleLanguage}}>
            {props.children}
        </LanguageContext.Provider>
    )
}