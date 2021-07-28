import React from 'react'
import { Switch, Route } from 'react-router'
import '../App.css'
import { PersonChat } from './chat'
import Home from './Home'
import { ChatList } from './chatList'
import { Profile } from './profile'


export default function Router(props) {
    return (
        <div>


            <Switch>
                <Route
                    path="/"
                    exact
                    render={() => (
                        <Home
                            chats={props.chats}
                            currentChat={props.currentChat}
                            onCurrentChatChange={props.onCurrentChatChange}
                            getIsChatExists={props.getIsChatExists}
                            onAddChat={props.onAddChat}
                            onRemoveChat={props.onRemoveChat}
                        />
                    )}
                />



                <Route
                    exact
                    path="/chats"
                    render={() => (
                        <ChatList
                            chats={props.chats}
                            currentChat={props.currentChat}
                            onCurrentChatChange={props.onCurrentChatChange}
                            getIsChatExists={props.getIsChatExists}
                            onAddChat={props.onAddChat}
                            onRemoveChat={props.onRemoveChat}
                        />
                    )}
                >

                </Route>

                

                <Route path="/chats/:chatId" render={() => {
                    return <PersonChat getIsChatExists={props.getIsChatExists} />
                }} />


                {/* <Route path="/profile"><p>Profile page</p></Route> */}
                <Route path="/profile" component={Profile}></Route>

                <Route><p>404: not found</p></Route>

            </Switch>
        </div>
    )
}