import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles({
    buttonSend: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 7,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
        marginLeft: '30px',
    },
});





const InputNikName = (props) => {
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
                placeholder="Enter your new Nik-Name"
                required
                autoFocus
                id="outlined-required"
                label="Your Nik"
                variant="outlined"
                value={inputValue}
                onChange={handleChange}
                
            />

            <Button type="submit" className={classes.buttonSend}>Replace</Button>
        </form>
    )
}

export default InputNikName