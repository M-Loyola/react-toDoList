import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import React from "react";

const TodoGroup= (props) => {
    const [todoItems, setTodoItems] = useState([]);

    useEffect(()=>{
        addTodoListItem();
        console.log(todoItems);
    },[])

    const addTodoListItem = () => {
        const todoListItems = [...todoItems, <TodoItem key={todoItems.length} input={props.input}/>]
        setTodoItems(todoListItems);
    }

    return (
        <div>
            <TodoItem input={props.input}/>
            {todoItems}
        </div>
    );
}

export default TodoGroup;