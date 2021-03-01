import React from "react"
import { Link } from "react-router-dom"
import Button from "react-bootstrap/Button"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import "./NavBar.css"

export const NavBar = (props) => {
    return (

        <Navbar variant="dark" bg="dark" expand="lg">
            <Navbar.Brand href="/">Travis' Tasks</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Nav className="ml-auto">
                <Nav.Link href="/create"> Create a Task </Nav.Link>
                <Nav.Link href="/"> Current Tasks </Nav.Link>
                <Nav.Link href="/completed"> Completed Tasks </Nav.Link>
                <Button variant="danger" onClick={() => {
                    localStorage.removeItem("todo_token")
                    props.history.push({ pathname: "/" })
                }}>Logout</Button>
            </Nav>
        </Navbar>
    )
}
