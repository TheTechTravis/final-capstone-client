import React, { useContext } from "react"
import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button'
import { TaskContext } from "./TaskProvider.js"
import "./Task.css"


export const Task = ({ task }) => {
    const { markComplete } = useContext(TaskContext)
    return (
        < section key={`task--${task.id}`} className="taskCard" >
            <div className="task__title">Title: {task.title}</div>
            <div className="task__content">Content: {task.content}</div>
            <Link key={task.id} id={task.id} to={'/edit'} >
                <Button variant="warning"> Edit Task </Button>
            </Link>
            <Button variant="success" onClick={() => markComplete(task.id)} > Mark As Completed Task </Button>
            <Button variant="danger"> Delete Task </Button>
        </section >
    )
}
