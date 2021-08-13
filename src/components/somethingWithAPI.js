import React from 'react'
import '../App.css';
import { API_URL } from '../constants/consts'
import { Button } from '@material-ui/core'

import LinearWithValueLabel from './progress'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    buttonNumber: {
        border: `2px solid blue`,
        height: 48,
        padding: '0 30px',
        marginLeft: '30px',
    }
});


export const SomeAPI = () => {

    const [number, setNumber] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(false)
    const [isError, setIsError] = React.useState(false)

    const classes = useStyles();

    const randomNumber = () => {
        setIsLoading(true)
        setIsError(false)

        fetch(API_URL)
            .then((response) => {
               if (!response.ok || response.status !== 200) {
                    throw Error('Something went wrong')
                }

                return response.json()
            })
            .then((responseJson) => {
                setNumber(responseJson)
                setIsLoading(false)
            })
            .catch((error) => {
                setIsLoading(false)
                setIsError(true)
            })
    }

    if (isLoading) {
        return (
            <div>
                <p>Loading...</p>
                <LinearWithValueLabel />
            </div>
        )
    }



    return (
        <div className="number">

            <h3>Some facts of Numbers</h3>
            <Button className={classes.buttonNumber} onClick={randomNumber}>Number</Button>

            {!isError ? (

                <div>
                    <p>{number.number}</p>
                    <p>{number.text}</p>
                </div>
            ) : (
                <p className="error">Something went wrong. Try again later</p>
            )}
        </div>
    )
};