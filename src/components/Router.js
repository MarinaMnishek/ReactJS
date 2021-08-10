import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import '../App.css'
import { PersonChat } from './chat'
import Home from './Home'
import { ChatList } from './chatList'
import { Profile } from './profile'
import { SomeAPI } from './somethingWithAPI'
import { Numbers } from './numbers'
import  Login  from './login'
import { useSelector } from 'react-redux'



const PrivateRoute = (props) => {
    const isAuthed = useSelector((state) => state.profile.isAuthed)

    return isAuthed ? <Route {...props} /> : <Redirect to="/login" />
}


export default function Router(props) {

  

    return (
        <div>


            <Switch>
                <Route path="/" exact  component = { Home } />

                <PrivateRoute exact path="/chats" component= {ChatList } ></PrivateRoute>
            
                <PrivateRoute path="/chats/:chatId" component= {PersonChat } />

                <PrivateRoute  path="/profile" component={Profile}></PrivateRoute>

                <Route  path="/someAPI" component={ SomeAPI }></Route>

                <Route path="/numbers" component={ Numbers }></Route>

                <Route  path="/login" component={ Login }></Route>

                <Route><p>404: not found</p></Route>

            </Switch>
        </div>
    )
}