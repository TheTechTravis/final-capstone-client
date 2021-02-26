import React from "react"
import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button'
import "./Task.css"

export const Task = ({ task }) => (
    < section key={`task--${task.id}`} className="taskCard" >
        <div className="task__title">Title: {task.title}</div>
        <div className="task__content">Content: {task.content}</div>

        <Link key={task.id} id={task.id} to={'/'} >
            <Button variant="warning"> Edit Task </Button>
        </Link>
        <Button variant="success"> Mark As Completed Task </Button>
        <Button variant="danger"> Delete Task </Button>
        {/* <div className="task__creationDate">Creation Date: {task.creation_date}</div> */}
        {/* <div className="task__isComplete">Is Complete:  {task.is_complete ? "Complete" : "Incomplete"}</div> */}
        <br />
    </section >
)
