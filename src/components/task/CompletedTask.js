import React from "react"
import Button from 'react-bootstrap/Button'
import "./CompletedTask.css"

export const CompletedTask = ({ task }) => (
    < section key={`task--${task.id}`} className="taskCard" >
        <div className="task__title">Title: {task.title}</div>
        <div className="task__content">Content: {task.content}</div>
        <Button variant="danger"> Delete Task </Button>
    </section >
)
