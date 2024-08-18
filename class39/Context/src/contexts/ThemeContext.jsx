/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const ThemeContext = createContext({theme: 'light', toggleTheme: () => {}})
export const ThemeProvider = (props) => {
    const [theme, setTheme] = useState("light")
    const toggleTheme = () => {
        setTheme(currTheme => currTheme === "light" ? "dark" : "light")
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}