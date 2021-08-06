import React from 'react'
import { Switch, Route } from 'react-router'
import '../App.css'
import { PersonChat } from './chat'
import Home from './Home'
import { ChatList } from './chatList'
import { Profile } from './profile'
import { SomeAPI } from './somethingWithAPI'
import { Numbers } from './numbers'


export default function Router(props) {
    return (
        <div>


            <Switch>
                <Route path="/" exact  render={() => ( <Home  /> )} />

                <Route exact path="/chats" render={() => ( <ChatList />)} ></Route>
            
                <Route path="/chats/:chatId" render={() => { return <PersonChat  /> }} />

                <Route path="/profile" component={Profile}></Route>

                <Route path="/someAPI" component={ SomeAPI }></Route>

                <Route path="/numbers" component={ Numbers }></Route>

                <Route><p>404: not found</p></Route>

            </Switch>
        </div>
    )
}