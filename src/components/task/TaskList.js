import React, { useContext, useEffect } from "react"
import { TaskContext } from "./TaskProvider.js"
import { Task } from "./Task"

export const TaskList = (props) => {
    const { tasks, getTasks } = useContext(TaskContext)

    useEffect(() => {
        getTasks()
    }, [])

    console.log(tasks)

    return (
        <article className="taskList">
            {
                // Return tasks who are marked as incomplete
                tasks.filter(task => { return task.is_complete == false })
                    // Map through returned results and render them to DOM
                    .map(task => {
                        return <Task key={task.id} task={task} />
                    })
            }
        </article>
    )
}