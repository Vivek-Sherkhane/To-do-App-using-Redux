import { AddItem, setCheckItem } from './ActionType';

export const AddTodo =(data) =>{
    // console.log("Action : ", data);
    return {
        type : AddItem,
        payload : data
    };
};

export const  setCheck = (data) =>{
    return {
        type : setCheckItem,
        payload : data
    };
};

