import React from "react"
import "./Task.css"

export const Task = ({ task }) => (
    < section key={`task--${task.id}`} className="taskCard" >
        <div className="task__title">Title: {task.title}</div>
        <div className="task__content">Content: {task.content}</div>
        <div className="task__creationDate">Creation Date: {task.creation_date}</div>
        <div className="task__isComplete">Is Complete:  {task.is_complete ? "Complete" : "Incomplete"}</div>
        <br />
    </section >
)
