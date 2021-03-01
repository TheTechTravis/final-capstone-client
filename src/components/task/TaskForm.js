import React, { useContext, useState, useEffect } from "react"
import { TaskContext } from "./TaskProvider"
import Button from "react-bootstrap/Button"

export const TaskForm = (props) => {

    const { tasks, getTasks, createTask, updateTask } = useContext(TaskContext)
    const [task, setTask] = useState({})

    useEffect(() => {
        getTasks()
    }, [])

    const editMode = props.match.params.hasOwnProperty("taskId")  // true or false
    const handleControlledInputChange = (event) => {
        const newTask = Object.assign({}, task)
        newTask[event.target.name] = event.target.value
        setTask(newTask)
    }
    useEffect(() => {
        getTaskInEditMode()
    }, [tasks])

    const getTaskInEditMode = () => {
        if (editMode) {
            const taskId = parseInt(props.match.params.taskId)
            const selectedTask = tasks.find(t => t.id === taskId)
            setTask(selectedTask)
        }
    }

    // making the new object on submit
    const constructNewTask = () => {
        const user_id = parseInt(localStorage.getItem("todo_token"))
        if (editMode) {
            const newTask = {
                id: task.id,
                user_id: user_id,
                title: task.title,
                creation_date: task.creation_date,
                content: task.content,
                is_complete: false
            }
            updateTask(newTask).then(props.history.push("/"))
        }
        else {
            const newTask = {
                user_id: user_id,
                title: task.title,
                content: task.content,
            }
            createTask(newTask).then(props.history.push("/"))
        }
    }
    return (
        <>
            <form className="taskForm">
                <fieldset>
                    <label> Title</label>
                    {task && <input type="text" name="title" defaultValue={task.title} onChange={handleControlledInputChange}></input>}
                </fieldset>
                <fieldset>
                    <label> Content</label>
                    {task && <input type="text" name="content" defaultValue={task.content} onChange={handleControlledInputChange}></input>}
                </fieldset>
            </form>
            <Button type="submit"
                onClick={event => {
                    event.preventDefault()
                    constructNewTask()
                }}> Submit
            </Button>
        </>
    )
}