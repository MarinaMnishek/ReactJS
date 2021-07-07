import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';



export const ChatList = (props) => {


    return (

        <div >
            <List >
                {props.items.map((el, index) => {
                    
                    return <ListItem key={el.id} button>
                        <Icon>star</Icon>
                        <ListItemText
                            primary={el.name}
                            key={el.index}
                        />
                    </ListItem>
                })
                }

            </List>
        </div >
    )


};


