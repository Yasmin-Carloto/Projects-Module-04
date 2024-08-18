import { useContext } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"
import { LanguageContext } from "../../contexts/LanguageContext"

function ToolBar() {
    const {theme} = useContext(ThemeContext)
    const { language } = useContext(LanguageContext)
    
    return (
        <h1>
            {language === "english" ? `Current theme - ${theme}` : `Tema atual - ${theme === "light" ? "claro" : "escuro"}`}
        </h1>
    )
}

export default ToolBar