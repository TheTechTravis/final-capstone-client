import React, { useState } from "react"

export const TaskContext = React.createContext()

export const TaskProvider = (props) => {
    const [tasks, setTasks] = useState([])

    const getTasks = () => {
        return fetch("http://localhost:8000/tasks", {
            method: "GET",
            headers: {
                "Authorization": `Token ${localStorage.getItem("todo_token")}`
            }
        })
            .then(response => response.json())
            .then(setTasks)
    }

    const createTask = (newTask) => {
        return fetch("http://localhost:8000/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("todo_token")}`
            },
            body: JSON.stringify(newTask)
        })
            .then(getTasks)
    }


    return (
        <TaskContext.Provider value={{ tasks, getTasks, createTask }} >
            { props.children}
        </TaskContext.Provider>
    )
}