import { useState } from "react";

const TodoGenerator = (props) => {
    const [inputValue, setInputValue] = useState("");
    
    const addTodoItem = () => {
        props.onInputChange(inputValue);
    }

    return (
        <div className="todoGenerator">
            <input onChange={event => setInputValue(event.target.value)}/>
            <button onClick={addTodoItem}>add</button>
        </div>
    );
}

export default TodoGenerator;