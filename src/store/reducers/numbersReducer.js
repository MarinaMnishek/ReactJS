import { CONDITION_LOADING } from '../actions/numbersAction'
import { CONDITION_ERROR } from '../actions/numbersAction'
import { CONDITION_CONTINUE } from '../actions/numbersAction'
import { NUMBERS_FACTS } from '../actions/numbersAction'
import { ADD_NUMBERS_FACTS } from '../actions/numbersAction'


export const NUMBERS_CONDITION = {
    LOADING: 'loading',
    ERROR: 'error',
    CONTINUE: 'continue',
}

const initialState = {
    facts: [],
    factsList: [
        {number: 551, numberFact:"551 is the year that Liang Yu Zhang Wang succeeds Liang Jian Wen Di as ruler of the Chinese Liang Dynasty."},
        {number:22, numberFact:"22 is the year that Drusus Julius Caesar receives the tribunicia potestas (tribunician power)."},
    ],
    condition: NUMBERS_CONDITION.CONTINUE
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case CONDITION_CONTINUE:
            return {
                ...state,
                condition: NUMBERS_CONDITION.CONTINUE
            }
        case CONDITION_ERROR:
            return {
                ...state,
                condition: NUMBERS_CONDITION.ERROR
            }
        case CONDITION_LOADING:
            return {
                ...state,
                condition: NUMBERS_CONDITION.LOADING
            }
        case NUMBERS_FACTS:
            return {
                ...state,
                facts: action.payload.numberFact
            }
            case ADD_NUMBERS_FACTS:
            return {
                ...state,
                [action.payload.number]: [
                    ...(state[action.payload.number] || []),
                    action.payload.numberFact,
                ],
                
            }
        default:
            return state
    }
}
