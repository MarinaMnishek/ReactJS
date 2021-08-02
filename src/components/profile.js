import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeName, changeIsNik, changeNikName } from '../store/actions/profileAction';
import '../App.css';
import Input from './Input';
import InputNikName from './InputNikName';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export const Profile = (props) => {

    const dispatch = useDispatch()

    const { name, age, isNik, nikName } = useSelector((state) => state.profile)

    const handleChangeName = (newName) => {
        dispatch(changeName(newName))
    }
    const handleIsNikChange = (e) => {
        dispatch(changeIsNik(e.target.checked))
    }

    const handleChangeNikName = (newNik) => {
        if (isNik) {
            dispatch(changeNikName(newNik))
        } else alert('Необходимо согласие на смену Ника')
    }


    return (
        <div>
            <div className="state">

                <div>
                    <p><b>Name: </b> {name} </p>
                    <p><b>Age: </b>{age}</p>
                    <p><b>Nik: </b>{nikName}</p>
                </div>
                <Input onSubmit={handleChangeName} />
                
            </div>

            <FormControlLabel
                control={
                    <Checkbox
                        checked={isNik}
                        onChange={handleIsNikChange}
                        name="checkedB"
                        color="primary"
                    />
                }
                label={<p className="change-nik">Хотите изменить Nik?</p>}
            />

            <InputNikName onSubmit={handleChangeNikName} />
        </div>

    )
}