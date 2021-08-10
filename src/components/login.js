import React from 'react'
import { useState } from 'react'
import firebase from 'firebase'
import { TextField } from '@material-ui/core'




export default function Login(props) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
  


    const handleChangeEmail = (e) => setEmail(e.target.value)
    const handleChangePassword = (e) => setPassword(e.target.value)
    

    const singIn = async () => {
            try {
                await firebase.auth().signInWithEmailAndPassword(email, password)
            } catch (error) {
                setError(error.message)
            }
        }
    const createUser = async () => {
        try {
            await firebase.auth().createUserWithEmailAndPassword(email, password)
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <div className="login">

            <h2>Войти или зарегистрироваться</h2>

            
            <TextField
                className="login-input"
                variant="outlined"
                placeholder="Email"
                value={email}
                type="email"
                onChange={handleChangeEmail}
            />
            <br />
            <TextField
                className="login-input"
                variant="outlined"
                placeholder="Password"
                value={password}
                type="password"
                onChange={handleChangePassword}
            />

            <div>
                <button type="submit" onClick={singIn} className="login-button">Войти</button>
                <button type="submit" onClick={createUser} className="login-button">Зарегистрироваться</button>

            </div>

        </div>
    )
}