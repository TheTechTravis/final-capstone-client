import React from "react"
import { Route } from "react-router-dom"
import { TaskProvider } from "./task/TaskProvider"
import { TaskList } from "./task/TaskList"
// import { CompleteTaskList } from "./task/CompleteTaskList"
// import { TaskForm } from "./task/TaskForm"

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            backgroundColor: "lightgoldenrodyellow"
        }}>
            {/* Current Tasks View */}
            <TaskProvider>
                <Route exact path="/">
                    <TaskList />
                </Route>
            </TaskProvider>

            {/* Completed Tasks View */}
            <TaskProvider>
                <Route exact path="/completed">
                    {/* <CompletedTaskList /> */}
                </Route>
            </TaskProvider>

            {/* Tasks Form View */}
            <TaskProvider>
                <Route exact path="/create">
                    {/* <TaskForm /> */}
                </Route>
            </TaskProvider>
        </main>
    </>
}
