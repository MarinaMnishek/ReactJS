import { API_URL } from "../../constants/consts"

export const CONDITION_LOADING = "NUMBERS::CONDITION_LOADING"
export const CONDITION_ERROR = "NUMBERS::CONDITION_ERROR"
export const CONDITION_CONTINUE= "NUMBERS::CONDITION_CONTINUE"
export const NUMBERS_FACTS ="NUMBERS::NUMBER_FACTS"

export const ADD_NUMBERS_FACTS ="NUMBERS::ADD_NUMBER_FACTS"

export const createNumbersFact = ( numberFact) => ({
    type: NUMBERS_FACTS,
    payload:{
        numberFact
    }
})
export const addNumbersFact = ( number, numberFact) => ({
    type: ADD_NUMBERS_FACTS,
    payload:{
        number: number,
        numberFact: numberFact,
    }
})

export const setConditionLoading =() => ({type: CONDITION_LOADING})
export const setConditionError =() => ({type: CONDITION_ERROR})
export const setConditionContinue =() => ({type: CONDITION_CONTINUE})

export const fetchNumbersFacts =()=> {
    return (dispatch, getState)=> {
        
        dispatch(setConditionLoading())

        fetch(API_URL)

        .then((response) => {
            if (!response.ok || response.status !==200){
                throw Error
            }
        return response.json()
        })
        .then((responseJson) => {
            dispatch(createNumbersFact(responseJson))
            
            dispatch(setConditionContinue)
        })

        .catch((error)=>
        dispatch(setConditionError)
        )

    }
}