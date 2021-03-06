import React from "react"
import { Link } from "react-router-dom"
import Button from "react-bootstrap/Button"
import "./Auth.css"


export const Login = props => {
    const email = React.createRef()
    const password = React.createRef()
    const invalidDialog = React.createRef()

    const handleLogin = (e) => {
        e.preventDefault()

        return fetch("http://127.0.0.1:8000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                username: email.current.value,
                password: password.current.value
            })
        })
            .then(res => res.json())
            .then(res => {
                if ("valid" in res && res.valid && "token" in res) {
                    localStorage.setItem("todo_token", res.token)
                    props.history.push("/")
                }
                else {
                    invalidDialog.current.showModal()
                }
            })
    }

    return (
        <main className="container--login">
            <dialog className="dialog dialog--auth" ref={invalidDialog}>
                <div>Email or password was not valid.</div>
                <Button variant="danger" className="button--close" onClick={e => invalidDialog.current.close()}> Close </Button>
            </dialog>
            <section>
                <form className="form--login" onSubmit={handleLogin}>
                    <h1 className="text"> Travis' Tasks </h1>
                    <h2 className="text">Please sign in</h2>
                    <fieldset>
                        <label className="text" htmlFor="inputEmail"> Email address </label>
                        <input ref={email} type="email" id="email" className="form-control" placeholder="Email address" required autoFocus />
                    </fieldset>
                    <fieldset>
                        <label className="text" htmlFor="inputPassword"> Password </label>
                        <input ref={password} type="password" id="password" className="form-control" placeholder="Password" required />
                    </fieldset>
                    <fieldset style={{
                        textAlign: "center"
                    }}>
                        <Button type="submit" variant="primary"> Sign In </Button>
                    </fieldset>
                </form>
            </section>
            <section className="link--register">
                <Link to="/register" style={{ color: "white" }}>Not a member yet?</Link>
            </section>
        </main>
    )
}
