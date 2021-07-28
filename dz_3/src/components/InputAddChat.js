import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles({
    buttonAdd: {
        background: `radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)`,
        height: 48,
        padding: '0 30px',
        marginLeft: '30px',
    }
});





const InputAddChat = (props) => {
    const { onSubmit } = props

    const classes = useStyles();

    const [inputValue, setInputValue] = useState('')

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (onSubmit) {
            onSubmit(inputValue)
            setInputValue('')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                placeholder="Enter chat name"
                required
                autoFocus
                id="outlined-required"
                label="Chat name"
                variant="outlined"
                value={inputValue}
                onChange={handleChange}
            />

            <Button type="submit" className={classes.buttonAdd}>Add</Button>
        </form>
    )
}

export default InputAddChat