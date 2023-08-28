import { useState } from "react";
import '../App.css';
import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";

const TodoList = () => {
    const [todoListItems, setTodoListItems] = useState([]);

    return (
        <div className="todoList">
            <div className="title">Todo List</div>
            <TodoGroup todoListItems={todoListItems}/>
            <TodoGenerator onInputChange={(input)=>  setTodoListItems(todoListItems.concat(input))}/>
        </div>
    );
}

export default TodoList;