import React from "react";

export const InputTodo = (props) => {
    
    const { todoText, onChange, onClick } = props;
    return (
        <>
            <div className="input-name">
            <input
                placeholder="TODOを入力"
                type="text"
                value={todoText}
                onChange={onChange}
            />
            <button onClick={onClick}>追加</button>
      </div>
      </>
    );
}