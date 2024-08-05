/* eslint-disable no-unused-vars */
import InsertTask from "./components/InsertTask/InsertTask"
import ToDoList from "./components/ToDoList/ToDoList"
import "./ToDo.css"
import { useState } from "react"

const ToDo = () => {
    const [task, setTask] = useState("")
    const [tasks, setTasks] = useState([])

    function addTaskToList(taskTitle){
        setTasks([...tasks, {key: tasks.length + 1, title: taskTitle}])
    }

    function removeTask(task){
        const newTasks = tasks.filter(taskItem => taskItem.key !== task.key)
        setTasks(newTasks)
    }

    return (
        <div className="to-do-container">
            <InsertTask addTaskToList={addTaskToList} />
            <ToDoList tasksList={tasks} removeTask={removeTask}/>
        </div>
    )
}

export default ToDo