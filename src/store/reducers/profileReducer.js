import { CHANGE_NAME } from "../actions/profileAction"
import { CHANGE_IS_NIK } from "../actions/profileAction"
import { CHANGE_NIK_NAME } from "../actions/profileAction"


const initialState = {
    name: 'Hellen',
    age: 31,
    isNik: false,
    nikName: 'Hell',
}

export default function reducer(state = initialState, action) {
    switch(action.type){
        case CHANGE_NAME: {
            return{
                ...state, 
                name: action.payload.name,
            }
        }case CHANGE_IS_NIK:{
            return {
                ...state,
                isNik: action.payload.isNik,
            }
        }
        case CHANGE_NIK_NAME:{
            return {
                ...state,
                nikName: action.payload.nikName,
            }
        }
        default: 
            return state
    }
}