import React from "react";
import {useDispatch} from "react-redux";
import {changeTheme} from "../redux/actions";

export const Theme = () => {
    const dispatch = useDispatch();

    return (
        <div className='m-4'>
            <button className='btn btn-warning' onClick={() => dispatch(changeTheme())}>Change Theme</button>
        </div>
    )
}