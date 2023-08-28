import '../App.css';

const TodoItem = (props) => {
    return (
        <div className="todoItem">{props.input}</div>
    );
}

export default TodoItem;