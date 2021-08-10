import React from 'react'
import '../App.css';
import { API_URL } from '../constants/consts'
import { Button } from '@material-ui/core'

import LinearWithValueLabel from './progress'
import { makeStyles } from '@material-ui/core/styles';

import { useDispatch, useSelector } from 'react-redux'
import { NUMBERS_CONDITION } from '../store/reducers/numbersReducer'
import { createNumbersFact, fetchNumbersFacts, addNumbersFact } from '../store/actions/numbersAction'

const useStyles = makeStyles({
    buttonNumber: {
        border: `2px solid blue`,
        height: 48,
        padding: '0 30px',
        marginLeft: '30px',
    }
});


export const Numbers = () => {

    const classes = useStyles();


    const { facts, factsList, condition } = useSelector((state) => state.numbers)
    // const numberList = useSelector((state) => state.numbers)
    console.log(facts)
    console.log(factsList)
    console.log(condition)
    const dispatch = useDispatch()


    const randomNumber = () => {
        dispatch(fetchNumbersFacts())
        dispatch(addNumbersFact())

    }
    //Здесь постоянно зависает. localStorage.clear() не помогает. Что необходимо сделать? !!!!!!!!!!!!!!!!!


    // if (condition === NUMBERS_CONDITION.LOADING) {

    //     return (
    //         <div className="number">
    //             <p>Loading...</p>
    //             <LinearWithValueLabel />
    //         </div>
    //     )
    // }

    function List(props) {
        return <p><span>{facts.number}:</span> {facts.text}</p>
    }
    return (<div className="numbers number">
        <div>

            <h3>Some facts of Numbers</h3>
            <Button className={classes.buttonNumber} onClick={randomNumber}>Number</Button>

            {condition !== NUMBERS_CONDITION.ERROR ? (

                <div>
                    <p>{facts.number}</p>
                    <p>{facts.text}</p>
                </div>
            ) : (
                <p className="error">Something went wrong. Try again later</p>
            )}
        </div>

        <div>
            {/* {factsList.map((num,i) =>(
                <List key={i}
                number={num.number}
                text={num.text}/>
            ))
            }      */}
            <List />
        </div>
    </div>
    )
};