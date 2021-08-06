import React from 'react';
import '../App.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { useHistory } from 'react-router'
import { Button } from '@material-ui/core'
import InputAddChat from './InputAddChat';
import { useSelector, useDispatch } from 'react-redux';
import { createChatList, deleteChatList } from '../store/actions/chatListAction';
import uuid from 'react-uuid'




export const ChatList = () => {


    const chats = useSelector((state) => state.chatList)
    const history = useHistory()

    const dispatch = useDispatch()
    const handleAddChat = (chat) => {
        history.push(`/chats/${chat.id}`)
    }

    const addChat = (name) => {
        dispatch(createChatList(uuid(), name))
    }
    const handleDeleteChat = (id) => {
        dispatch(deleteChatList(id))
    }

    return (

        <div className="chats">
            <List subheader={<p>Список чатов</p>}>

                {Object.values(chats).map((chat,i) => (

                    <div className="chat-item" key={i}>

                        <ListItem
                            button
                            key={chat.id}
                            // selected={chat.id === currentChat.id}
                            onClick={() => handleAddChat(chat)}
                        >
                            {chat.name}
                        </ListItem>

                        <Button onClick={() => handleDeleteChat(chat.id)}>
                            Удалить
                        </Button>
                    </div>
                ))}

            </List>

            <InputAddChat onSubmit={addChat} />

        </div >
    )


};

































// export const ChatList = (props) => {


//     const  {chatList}  = useSelector((state) => state.chatList)
//     const dispatch = useDispatch()
//     const handleChatLinkClick = (newName) => {
//         dispatch(createChatList(newName))
//     }

//     const {
//         // chats = [],
//         currentChat,
//         onCurrentChatChange,
//         onAddChat,
//         onRemoveChat,
//     } = props
//     const history = useHistory()

//     // const handleChatLinkClick = (chat) => {
//     //     onCurrentChatChange(chat)
//     //     history.push(`/chats/${chat.id}`)
//     // }

//     return (

//         <div className="chats">
//             <List subheader={<p>Список чатов</p>}>

//                 {chatList.map((chat) => (
//                     <div className="chat-item"  key={chat.id}>
//                         <ListItem
//                             button
//                             key={chat.id}
//                             // selected={chat.id === currentChat.id}
//                             onClick={() => handleChatLinkClick(chat)}
//                         >
//                             {chat.name}
//                         </ListItem>

//                         <Button onClick={() => onRemoveChat(chatList.id)}>
//                             Удалить
//                         </Button>
//                     </div>
//                 ))}

//             </List>

//             <InputAddChat onSubmit={onAddChat} />


//         </div >
//     )


// };


