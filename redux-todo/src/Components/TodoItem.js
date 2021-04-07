import React from 'react';
import './TodoItem.css';
import { Checkbox } from '@material-ui/core';
import {useDispatch} from 'react-redux';
import {setCheck} from '../features/Action';

function TodoItem(props) {
    const dispatch = useDispatch();
    const handleChange = ()=>{
            dispatch(setCheck(props.id));
    }

    return (
        <div className="todoItem">
            <Checkbox
            checked={props.done}
            color = "primary"
            onChange={handleChange}
            inputProps={{ 'aria-label': 'primary checkbox' }}
            />
            <p className={props.done && 'todoItem-done'}>{props.name}</p>
        </div>
    )
}

export default TodoItem
