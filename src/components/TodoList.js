import { useState } from "react";
import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";

const TodoList = () => {
    const [todoListItems, setTodoListItems] = useState([]);

    return (
        <>
        <div>Todo List</div>
        <TodoGroup todoListItems={todoListItems}/>
        <TodoGenerator onInputChange={(input)=>  setTodoListItems(todoListItems.concat(input))}/>
        </>
    );
}

export default TodoList;