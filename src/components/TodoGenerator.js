import { useState } from "react";
import '../App.css';

const TodoGenerator = (props) => {
    const [inputValue, setInputValue] = useState("");
    const [alertMessage, setAlertMessage] = useState("");
    
    const addTodoItem = () => {
        if(!inputValue.match(/[a-z]/i)) {
            setAlertMessage("Please add an item!")
        } else {
            props.onInputChange(inputValue);
            setAlertMessage("");
            setInputValue("");
        }
    }

    return (
        <>
        <div className="todoGenerator">
            <input className="inputTodo" value={inputValue} onChange={event => setInputValue(event.target.value)}/>
            <button className="submitInput" onClick={addTodoItem}>add</button>
        </div>
        <div>{alertMessage}</div>
        </>
    );
}

export default TodoGenerator;