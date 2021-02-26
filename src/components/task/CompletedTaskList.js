import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { TaskContext } from "./TaskProvider.js"
import { CompletedTask } from "./CompletedTask"

export const CompletedTaskList = (props) => {
    const { tasks, getTasks } = useContext(TaskContext)

    let history = useHistory()

    useEffect(() => {
        getTasks()
    }, [])

    console.log(tasks)

    return (
        <article className="completedTaskList">
            {
                // Return tasks who are marked as complete
                tasks.filter(task => { return task.is_complete == true })
                    // Map through returned results and render them to DOM
                    .map(task => { return <CompletedTask key={task.id} task={task} /> })
            }
        </article>
    )
}