import { useContext } from "react"
import { MyContext } from "../../contexts/Context"

function ChildComponent (){
    const context = useContext(MyContext)

    return <div>{context.name} tem {context.age} anos.</div>
}

export default ChildComponent