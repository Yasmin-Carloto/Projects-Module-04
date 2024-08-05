/* eslint-disable react/prop-types */
import "./ToDoList.css"
import { FaTrash } from "react-icons/fa";

const ToDoList = ({tasksList, removeTask}) => {
    return(
        <ul>
            {tasksList.map(task => (
                <li
                    key={task.key}
                    className="task-item"
                >
                    <p className="task-title">{task.title}</p>
                    <button className="task-delete" onClick={() => removeTask(task)}>
                        <FaTrash className="trash"/>
                    </button>
                </li>
            ))}
        </ul>
    )
}

export default ToDoList