import React from 'react';
import './App.css';
import Input from './Components/Input';
import TodoItem from './Components/TodoItem';
import {useSelector} from 'react-redux';


function App() {
  
  const  statedata = useSelector(state => state);
  return (
    <div className="app">
      <div className="app-container">
        <div className="app-todoContainer">
          {
            statedata.map(item =>{
               return (<TodoItem 
                  name ={item.todoList.item}
                  done ={item.todoList.done}
                  id = {item.todoList.id}
                />)
            })
          }
        </div>
        <Input/>
      </div>
      
    </div>
  );
}

export default App;
