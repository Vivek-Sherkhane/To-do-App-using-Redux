import React, { useState } from 'react';
import './Input.css';
import {useDispatch} from 'react-redux';
import {AddTodo} from '../features/Action';

function Input() {

    const [input, setInput] = useState('');
    
    const dispatch = useDispatch();
    const AddItem = (e) =>{
        e.preventDefault();

        dispatch(AddTodo({
            item : input,
            done : false,
            id : Date.now()
        }));

        setInput('');
    }

    return (
        <div className="input-box">
                <input className="input-field" type="text" value={input} onChange= {e=>setInput(e.target.value)}/>
                <button onClick={AddItem}>Add!</button>
        </div>
    )
}

export default Input
