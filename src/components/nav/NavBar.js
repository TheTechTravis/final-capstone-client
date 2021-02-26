import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item">
                <Link className="nav-link" to="/create">
                    Create a Task
                </Link>
            </li>
            <li className="navbar__item">
                <Link className="nav-link" to="/">
                    Current Tasks
                </Link>
            </li>
            <li className="navbar__item">
                <Link className="nav-link" to="/completed">
                    Completed Tasks
                </Link>
            </li>
            {
                (localStorage.getItem("todo_token") !== null) ?
                    <div className="nav-item">
                        <button className="nav-link fakeLink"
                            onClick={() => {
                                localStorage.removeItem("todo_token")
                                props.history.push({ pathname: "/" })
                            }}
                        >Logout</button>
                    </div> :
                    <>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                    </>
            }        </ul>
    )
}
