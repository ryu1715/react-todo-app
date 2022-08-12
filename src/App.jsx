import React, { useState } from "react";
import "./styles.css";

import {InputTodo} from "./components/InputTodo";
import {ImconpleteTodos} from "./components/ImcompleteTodos";

export const App = () => {
  const [imcompleteTodos, setImcompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);
  const [todoText, setTodoText] = useState();

  const onChangeTodoText = (e) => {
    setTodoText(e.target.value);
  };

  const onClickAdd = () => {
    // 何も入力されていない場合
    if (!todoText) return;

    const newTodos = [...imcompleteTodos, todoText];
    setImcompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...imcompleteTodos];
    newTodos.splice(index, 1);
    setImcompleteTodos(newTodos);
  };
  
  const onClickComplete = (index) => {
    const newImcompleteTodos = [...imcompleteTodos];
    newImcompleteTodos.splice(index, 1);
    
    
    const newCompleteTodos = [...completeTodos, imcompleteTodos[index]]
    setImcompleteTodos(newImcompleteTodos);
    setCompleteTodos(newCompleteTodos);
  }
  
  const onClickBack = (index) => {
    const newCompleteTodo = [...completeTodos];
    newCompleteTodo.splice(index, 1);
    
    const newImcompleteTodos = [...imcompleteTodos, completeTodos[index]];
    
    setCompleteTodos(newCompleteTodo);
    setImcompleteTodos(newImcompleteTodos);
  }

  return (
    <>
      <InputTodo todoText={todoText} onChange={onChangeTodoText} onClick={onClickAdd}/>
      
      <ImconpleteTodos todos={ImconpleteTodos} onClickComplete={onClickComplete} onCloickDelete={onClickDelete} />
      

      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
