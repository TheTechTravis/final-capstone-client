import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { TaskContext } from "./TaskProvider.js"
import { Task } from "./Task"

export const TaskList = (props) => {
    const { tasks, getTasks } = useContext(TaskContext)

    let history = useHistory()

    useEffect(() => {
        getTasks()
    }, [])

    console.log(tasks)

    return (
        <article className="taskList">
            {
                tasks.map(task => {
                    return <Task key={task.id} task={task} />
                })
            }
        </article>
    )
}