/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./InsertTask.css"
import { useState } from "react"

const InsertTask = ({addTaskToList}) => {
    const [task, setTask] = useState("")
    const [isFieldEmpty, setFieldEmpty] = useState(false)

    function handleAddTask(){
        if(task.trim() !== ""){
            addTaskToList(task)
            setTask("")
            setFieldEmpty(false)
        }else{
            setFieldEmpty(true)
        }
    }

    return(
        <div className="insert-container">
            <h1>Insira a tarefa</h1>
            <div className="input-container">
                <input type="text" className="input-text" id="" onChange={(event) => setTask(event.target.value)} value={task} required/>
                <input className="input-button" type="button" value="adicionar" onClick={() => handleAddTask()}/>
                {isFieldEmpty ? <p>Preencha o campo</p> : <></>}
            </div>
        </div>
    )
}

export default InsertTask