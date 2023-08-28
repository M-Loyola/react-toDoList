import { useState } from "react";
import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";

const TodoList = () => {
    const [input, setInput] = useState("");
    return (
        <>
        <div>Todo List</div>
        <TodoGroup input={input}/>
        <TodoGenerator onInputChange={(input)=>  setInput(input)}/>
        </>
    );
}

export default TodoList;