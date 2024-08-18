// Forma 1
import { createContext } from "react"

export const MyContext = createContext()
export const MyProvider = (props) => {
    return (
        <MyContext.Provider value={ {name: "Yasmin", age: 18} }>
            {props.children}
        </MyContext.Provider>
    )
}