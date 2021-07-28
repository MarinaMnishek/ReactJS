import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeName } from '../store/actions/profileAction';
// import './App.css';
import Input from './Input';

export const Profile = () => {

    const dispatch = useDispatch()

    const { name, age } = useSelector((state) => state.profile)

    const handleChangeName = (newName) => {
        dispatch(changeName(newName))
    }

    return (
        <div>
            <div>
                <p><b>Name: </b> {name} </p>
                <p><b>Age: </b>{age}</p>
            </div>
            <Input onSubmit={handleChangeName} />

        </div>

    )
}