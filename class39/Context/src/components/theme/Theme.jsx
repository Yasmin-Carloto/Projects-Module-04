import { useContext } from "react"
import ToolBar from "../toolBar/toolBar"
import { ThemeContext } from "../../contexts/ThemeContext"
import ButtonStyle from "../buttonStyle/ButtonStyle"
import { LanguageContext } from "../../contexts/LanguageContext"

function Theme() {
    const { theme, toggleTheme } = useContext(ThemeContext)
    const { language, toggleLanguage } = useContext(LanguageContext)

    return (
        <div className={`flex items-center justify-center flex-col p-4 h-screen font-semibold ${theme === "light" ? "bg-indigo-600 text-orange-400" : "bg-indigo-900 text-orange-600" }`}>
            <ToolBar />
            <div>
                <ButtonStyle 
                    buttonAction={toggleTheme}
                    buttonText={language === "english" ? "Change theme" : "Mudar tema"}
                />

                <ButtonStyle 
                    buttonAction={toggleLanguage}
                    buttonText={language === "english" ? "Change language" : "Mudar idioma"}
                />
            </div>
        </div>
    )
}

export default Theme