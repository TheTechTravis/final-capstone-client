import React, { useContext } from "react"
import Button from 'react-bootstrap/Button'
import { TaskContext } from "../task/TaskProvider"
import "./CompletedTask.css"


export const CompletedTask = ({ task }) => {

    const { markComplete, deleteTask } = useContext(TaskContext)

    return (
        < section key={`task--${task.id}`} className="taskCard" >
            <div className="task__title">Title: {task.title}</div>
            <div className="task__content">Content: {task.content}</div>
            <Button variant="danger" onClick={() => deleteTask(task.id)}> Delete Task </Button>
        </section >
    )
}
